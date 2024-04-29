import { FC } from "react";

interface CloseProps {
    color: string;
}

const Close: FC<CloseProps> = ({ color }) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 184.47 184.47"
            >
                <path
                    d="M150.83 0H33.64C15.14 0 0 15.14 0 33.64v117.19c0 18.5 15.14 33.64 33.64 33.64h117.19c18.5 0 33.64-15.14 33.64-33.64V33.64c0-18.5-15.14-33.64-33.64-33.64Zm-.01 124.81c7.25 7.36 7.15 19.29-.22 26.65-7.37 7.35-19.22 7.33-26.46-.03l-31.89-32.34-31.95 32.4c-7.31 7.42-19.2 7.46-26.55.07-7.35-7.38-7.38-19.39-.07-26.8l32.08-32.53-32.11-32.56c-7.25-7.36-7.15-19.29.22-26.65 7.37-7.35 19.22-7.33 26.46.03l31.89 32.34 31.95-32.4c7.31-7.42 19.2-7.46 26.55-.07 7.35 7.38 7.38 19.39.07 26.8l-32.08 32.53 32.11 32.56Z"
                    style={{
                        fill: color,
                        strokeWidth: 0,
                    }}
                />
            </svg>
        </svg>
    );
};

export default Close;
