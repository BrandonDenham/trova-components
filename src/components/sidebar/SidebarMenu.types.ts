import { SimpleComponent } from "../../shared/interfaces/SimpleComponent.types";

export default interface SidebarMenuProps extends SimpleComponent {
    open?: boolean;
    onToggle?: (arg0: boolean) => boolean;
    title: string;
    children: object;
}
