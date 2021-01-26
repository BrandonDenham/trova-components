import { SimpleComponent } from "../../shared/interfaces/SimpleComponent.types";

export default interface HeaderProps extends SimpleComponent{
    title: string;
    subtitle: string;
    iconDescription?: string;
    backgroundImage: any;
    icon?: React.ReactNode;
}
