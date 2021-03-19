import { Delete } from "@material-ui/icons";
import React from "react";
import CustomButton from "../../ui/button/CustomButton";
import InputWithLabelIcon from "../../components/inputs/InputWithLabelIcon";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import SelectWithLabelIcon from "../../components/inputs/SelectWithLabelIcon";

const index = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "30rem" }}>
            <CustomButton label="Sign Up" />
            <CustomButton variant="borderButton" label="Sign Up" />
            <CustomButton variant="iconButton" icon={<Delete />} />
            <CustomButton variant="circleSmallButton" icon={<Delete />} />
            <CustomButton variant="circleLargeButton" icon={<Delete />} />
            <CustomButton variant="iconColorButton" icon={<Delete />} />
            <InputWithLabelIcon label="Input field" placeholder="Username" />
            <InputWithLabelIcon label="Input field" placeholder="Username" icon={<VisibilityOffIcon />} />
            <SelectWithLabelIcon
                label="field 1"
                options={[
                    { label: "1", value: "1" },
                    { label: "1", value: "1" },
                    { label: "1", value: "1" },
                    { label: "1", value: "1" },
                ]}
            />
            <SelectWithLabelIcon
                label="field 2"
                options={[
                    { label: "1", value: "1" },
                    { label: "1", value: "1" },
                    { label: "1", value: "1" },
                    { label: "1", value: "1" },
                ]}
                variant="underlineBorder"
            />
        </div>
    );
};

index.propTypes = {};

export default index;
