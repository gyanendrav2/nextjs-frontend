# PXL API

# JSON Schema

## Users

```
{
    "user": {
        "email": "pxl@thepxl.co",
        "username": "pxl",
        "token": "jwt.token.here",
    }
}
```

## Profiles

```
{
    "profile": {
        "email": "pxl@thepxl.co",
        "username": "pxl",
        "token": "jwt.token.here",
        "first_name": "Kidus",
        "last_name": "Negesse",
        "bio": "I make cool movies.",
        "profile_picture": picture_url,
        "cover": {
            "video": youtube_link,
            "image": null
        },
        "roles": ["Director", "Screenwriter"],
        "location": "New York, NY, USA",
        "external_links": {
            "youtube": "https://www.youtube.com/channel/pxl",
            "instagram": "https://www.instagram.com/pxlforcreators/",
            "facebook": "https://www.facebook.com/pxlforcreators/",
            "tiktok": "https://www.tiktok.com/@pxlforcreators/",
            "fiverr": "https://www.fiverr.com/pxlforcreators/",
            "twitter": "https://www.twitter.com/pxlforcreators/",
            "linkedin": "https://www.linkedin.com/in/pxlforcreators/"
        },
        "projects": [1029, 5050, 9390]
        "followers_count": 628,
        "following": false
    }
}
```

## Projects

Single project with full details.

```
{
    "project": {
        "id": "1046",
        "created_at": "2020-11-05T 05:56:20.622Z",
        "updated_at": "2020-11-18T 02:36:60.923Z",
        "owner": "damienchazelle",
        "members": ["ryan_gosling", "emma.stone"],
        "title": "La La Land",
        "year": "2016",
        "categories": ["Musical", "Romance", "Drama"],
        "clients": ["Summit Entertainment"],
        "external_links": ["", "", ""],
        "cover": {
            "video": youtube_link,
            "image": null
        },
        "content": {
            contentBlocks: [{
                "key": 1,
                "left": {
                    "text": {
                        "headline": "The making of La La Land",
                        "body": ""
                    },
                    "image": null,
                    "video": null
                },
                "right": {
                    "text": null,
                    "image": null,
                    "video": youtube_link
                },
                "full": null
            },
            {
                "key": 2,
                "left": null,
                "right": null,
                "full": {
                    "text": {
                        "headline": "The making of La La Land",
                        "body": ""
                    },
                    "image": null,
                    "video": null
                }
            },
            {
                "key": 3,
                "left": {
                    "text": null,
                    "image": image_link,
                    "video": null
                },
                "right": {
                    "text": {
                        "headline": "The Crew",
                        "body": ""
                    },
                    "image": null,
                    "video": null
                },
                "full": null
            }],
            contentBlocksCount: 3
        },
        "gallery": [image1, image2, image3],
        "participating": false
    }
}
```

## Status Codes

-   200 OK
-   201 created OK
-   204 deleted OK
-   400 bad/invalid request
-   401 for unauthorized requests for requests which require authentication.
-   403 for requests where user doesn't have permissions.
-   404 for not found errors.
-   422 for requests with unprocessable entities, like missing values in request body or images which can't be formatted.

### Error payload

```
{
    "errors": {
        "message": ""
    }
}
```

# Endpoints

All endpoints which require the active user's information will require jwt.token.here.

## Registration

Unique username and email required. Password strength requirements. Redirect to log in page.

```
POST /api/users

{
    "user": {
        "email": "pxl@thepxl.co",
        "username": "pxl",
        "password": "pxlmania"
    }
}
```

## Login/Authentication

Redirect to home page. Returns user object with token to be used for future authenticated requests.

```
POST /api/users/login

{
    "user": {
        "email": "pxl@thepxl.co",
        "password": "pxlmania"
    }
}
```

## Forgot Password

User who forgets password enters account email. They will be sent an email with a confirmation code. This confirmation code is required to update their password.

```
POST /api/forgot_password_email

{
    "forgot_password_email": "kidus.neges@gmail.com"
}

POST /api/forgot_password_submit

{
    "forgot_password_submit": {
        "code": 563095,
        "email": "kidus.neges@gmail.com",
        "new_password": "",
    }
}
```

## Users

All require jwt token.

Get active current user. Returns logged-in user object.

```
GET /api/user
```

Update logged-in user. This will update the user's profile. Request body is a user object. Returns updated user object.

```
PUT /api/user

// Example
{
    "user" : {
        "new_password": "thisispxl",
        "current_password": "pxlmania",
        "deactivate": true,
        "notification_preferences": {
            "follows": true
        }
    }
}
```

## Profiles

Get profile. jwt token not required. Returns profile object.

```
GET /api/profiles/:username
```

### Updating Profiles

Update profile. jwt token required. Returns profile object.

```
PUT /api/profiles/:username
```

### Following

Follow/unfollow a profile. jwt token required, no additional parameters. Returns updated profile object.

```
POST /api/profiles/:username/follow
DELETE /api/profiles/:username/follow
```

Get followers of profile. jwt not required.

```
GET /api/profiles/:username/followers

// Returns list of follower data
{
    "followers": [
        {
            "username" : "jackdorsey",
            "image" : "",
            "name": "Jack Dorsey"
        },
        {
            "username" : "barackobama",
            "image" : "",
            "name": "Barack Obama"
        }
    ],
    followers_count: 3
}
```

Get who a profile is following. jwt not required.

```
GET /api/profiles/:username/following

// Returns list of following data
{
    "following": [
         {
            "username" : "jackdorsey",
            "image" : "",
            "name": "Jack Dorsey"
        },
        {
            "username" : "barackobama",
            "image" : "",
            "name": "Barack Obama"
        }
    ],
    following_count: 3
}
```

### Contact

To send email via pxl to user. jwt required.

```
POST /api/profiles/:username/contact

{
    "contact": {
        "username": "christian_bale",
        "subject": "I love your movies",
        "body": ""
    }
}
```

## Projects

### Getting Projects

Get a specific project. Returns a project object.

```
GET /api/projects/:id
```

-   To get projects for a specific profile, use endpoint under 'Profiles'.
-   To get global projects, and filter them, use endpoint under 'Discover'.
-   To get personalized projects for feed, use endpoint under 'Home/Feed'.

### Creating and Editting Projects

Create new project or update existing project. Authentication required.

Members added are preliminary. A request is sent to added users, and they must accept to appear in the project and have it displayed on their profile. Once part of the project, members have editting privileges, but not deletion.

Limit of 20 photos in gallery. Maximum size of 5 MB each.

```
(create) POST /api/projects
(update) PUT /api/projects/:id

// Example create request
{
    "project": {
        "owner": "damienchazelle",
        // Username for members, email for non-members (who will get an invite)
        "members": ["ryan_gosling", "emma.stone", "kidus.neges@gmail.com"],
        "title": "La La Land",
        "year": "2016",
        "categories": ["Musical", "Romance", "Drama"],
        "clients": ["Summit Entertainment"],
        "external_links": ["", "", ""],
        "cover": {
            "video": youtube_link,
            "image": null
        },
        "content": {
            contentBlocks: [{
                "key": 1,
                "left": {
                    "text": {
                        "headline": "The making of La La Land",
                        "body": ""
                    },
                    "image": null,
                    "video": null
                },
                "right": {
                    "text": null,
                    "image": null,
                    "video": youtube_link
                },
                "full": null
            },
            {
                "key": 2,
                "left": null,
                "right": null,
                "full": {
                    "text": {
                        "headline": "The making of La La Land",
                        "body": ""
                    },
                    "image": null,
                    "video": null
                }
            },
            {
                "key": 3,
                "left": {
                    "text": null,
                    "image": image_link,
                    "video": null
                },
                "right": {
                    "text": {
                        "headline": "The Crew",
                        "body": ""
                    },
                    "image": null,
                    "video": null
                },
                "full": null
            }],
            contentBlocksCount: 3
        },
        "gallery": [image1, image2, image3],
    }
}
```

Optional fields for creation: `members, clients, external_links, content, gallery`. All other fields are required. At least one category is required.

### Delete Project

Delete project, authentication required. Only the owner can delete this.

```
DELETE /api/projects/:id
```

### User Requests Participation in Project

Active logged-in user sends a request to be included as team member in already uploaded project. Authentication required.

```
POST /api/projects/:id/participate

// Example request body sent by user "jksimmons" to project owner
{
    "participate": {
        "username": "jksimmons",
        "message": "Hey! Remember me? I was an actor with you on this movie."
    }
}
```

The owner of the project will see a message in notifications describing this request. POST to this endpoint for the owner to accept or decline request. True denotes acceptance, false rejection.

```
POST /api/projects/:id/participate/response

{
    "participate_response": {
        "participation_request_id": 3,
        "response": true,
        // Message is only included if the response is false (rejection)
        "message": null
    }
}
```

### User responding to request to join project

A user is added by a project owner to join their project upon project creation or project update. This will send a notification to the added user. They must accept or reject the request from notifications using this endpoint. True denotes acceptance, false rejection.

```
POST /api/projects/:id/add_member

{
    "add_member_response": {
        // Username of project owner
        "username": "jksimmons",
        "project_id": 35253,
        "response": true,
        // Message is only included if the response is false (rejection)
        "message": null
    }
}
```

## Home/Feed

Returns default list of up to 15 projects. Priority is projects from profiles that user follows. To fill the rest, projects are retrieved from profiles outside their network. Reaching bottom of page should send another request for more projects. jwt required.

```
GET /api/feed

// Returns list of project objects

{
    "projects": [
        {
            "project": // project object,
            "user_image": ,
            "name": "Benjamin Franklin"
        },
        {
            "project": // project object,
            "user_image": ,
            "name": "Benjamin Button"
        }
    ]
}
```

## Discover

Returns default list of 8 featured projects as IDs and 4 featured curated creators as usernames. Applying filters returns new list of only projects, default size 10. jwt not required.

```
GET /api/discover

// Returns list of projecs and creators


{
    "featured_projects": [
        {
            "project": // project object,
            "user_image": ,
            "name": "Benjamin Franklin"
        },
        {
            "project": // project object,
            "user_image": ,
            "name": "Benjamin Button"
        }
        // Plus 6 more
    ],
    "featured_profiles": [
        // returns profile objects
    ]
}

// Query filters for projects from api/discover

?category=film

?sub-category=shortfilm

?year=2016

?size=10

// Sort preference can either be alphabetical ('alpha') or chronological from most recent ('chrono')

?sort=alpha

```

## Network

Same endpoints as 'Following' section under 'Profiles'.

## Notifications

Get profile notifications. Default maximum size is 20 notifications. To load more notifications, add query filter.

```
GET /api/notifications

// Example return body
{
    "notifications": [
        "follower": {
            "username": "chris_nolan",
            "picture": ,
            "name": "Chris Nolan"
        },

        // Project you have been added to
        // Need to respond with accept or reject response detailed in 'Projects'
        // under "User responding to request to join project"
        "request_add_member": {
            "participation_id": 2,
            "profile": {
                "username": "chris_nolan",
                "name": "Chris Nolan",
                "picture":
            },
            "project": {
                "id": 342,
                "title": "Tenet"
            }
        },

        // User requests to be part of your project
        // Need to respond with accept or reject response detailed in 'Projects'
        // under "User Requests Participation in Project"
        "participation_request": {
            "participation_id": 3,
            "profile": {
                "username": "jksimmons",
                "name": "J.K. Simmons",
                "picture":
            },
            "project": {
                "id": 41421,
                "title": "Whiplash"
            }
            "message": "Hey it's me, I was an actor with you on this movie.",
        },

        // User accepts your request to add them to your project
        "request_add_member_acceptance": {
            "profile": {
                "username": "chris_nolan",
                "name": "Chris Nolan",
                "picture":
            },
            "project": {
                "id": 342,
                "title": "Tenet"
            }
        },

        // User rejects your request to add them to your project
        "request_add_member_rejection": {
            "profile": {
                "username": "david_gilmour",
                "name": "David Gilmour",
                "picture":
            },
            "project": {
                "id": 342,
                "title": "Have a Cigar"
            }
            "message": "I think you have me mistaken"
        },

        // User accepts your request to be part of their project
        "participation_request_acceptance": {
            "profile": {
                "username": "david_gilmour",
                "name": "David Gilmour",
                "picture":
            },
            "project": {
                "id": 6545,
                "title": "Time"
            }
        },

        // User rejects your request to be part of their project
        "participation_request_rejection": {
            "profile": {
                "username": "freddie.mercury",
                "name": "Freddie Mercury",
                "picture":
            },
            "project": {
                "id": 6545,
                "title": "Don't Stop Me Now"
            }
            "message": "I think you requested the wrong project -- we didn't collaborate on this, we collaborated on Bohemian Rhapsody.",
        }
    ]
}

// Query parameter

?size=60
```

## Search

### Search in Navigation Bar

Search for projects or profiles. Optional filter parameters. Authentication not required. Default maximum size returned is 16. Return object is list of projects or profiles.

```
GET /api/search

// Request body
// "type" is either "projects" or "profiles"

{
    "search": {
        "type": "projects",
        "message": "la la land",
    }
}

// Query filters for projects

?category=film

?sub-category=shortfilm

?year=2016

?size=10

// Sort preference can either be alphabetical ('alpha') or chronological from most recent ('chrono')

?sort=alpha

// Query filters for profiles

?location=atlanta-georgia-usa

?role=screenwriter

?size=10

// Sort preference can either be alphabetical ('alpha') or chronological from most recent ('chrono')

?sort=alpha
```

-   To search existing projects before creating your own, use search endpoint with type "projects".
-   To search existing profiles to add to project, use search endpoint with type "profiles".

## About Us

Get about us description.

```
GET /api/about

// Example return object
{
    "about": {
        "title": "About Us",
        "body": "We're pxl and we ...",
        "image": image
    }
}
```

## Social Media Links

pxl's social media links.

```
GET /api/pxl_social_media

// Example return object
{
    "pxl_social_media": {
        "youtube": "https://www.youtube.com/channel/pxl",
        "instagram": "https://www.instagram.com/pxlforcreators/",
        "facebook": "https://www.facebook.com/pxlforcreators/",
        "tiktok": "https://www.tiktok.com/@pxlforcreators/",
        "fiverr": "https://www.fiverr.com/pxlforcreators/",
        "twitter": "https://www.twitter.com/pxlforcreators/",
        "linkedin": "https://www.linkedin.com/in/pxlforcreators/"
    }
}
```
