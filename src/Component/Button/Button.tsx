import './Button.scss';

type ButtonProps = {
    label: string;
    color: "primary" | "secondary";
    size: "small" | "medium" | "large";
    onClick?: () => void;
}

const Button = ({label, onClick, color, size}: ButtonProps) => {
  return (
    <div>
        <button className={`button button--${color} && button button--${size}`} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button