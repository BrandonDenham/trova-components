import { SimpleComponent } from "../../shared/interfaces/SimpleComponent.types";

export default interface SidebarProps extends SimpleComponent {
    children: object;
    visible?: boolean;
}
