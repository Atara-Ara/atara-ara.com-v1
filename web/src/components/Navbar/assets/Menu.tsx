import { FC } from "react";

interface MenuProps {
    color: string;
}

const Menu: FC<MenuProps> = ({ color }) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297">
            <defs>
                <style>
                    {`
                    .cls-1 {
                        fill: ${color};
                    }
                    .cls-2 {
                        fill: none;
                        stroke: none;
                    }
                    `}
                </style>
            </defs>
            <rect className="cls-2" x="0" width="297" height="297" />
            <rect className="cls-1" x="0" y="27" width="297" height="63" rx="31.5" ry="31.5" />
            <rect className="cls-1" y="117" width="297" height="63" rx="31.5" ry="31.5" />
            <rect className="cls-1" x="0" y="208" width="297" height="62" rx="31" ry="31" />
        </svg>
    );
};

export default Menu;
