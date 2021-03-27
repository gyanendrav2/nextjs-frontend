for file in *
do
  test "$file" = "fix-case.sh" && continue
  mv "$file" "foo_$file"
done
git add .
for file in foo_*
do
  mv "$file" "${file#foo_}"
done
git add .