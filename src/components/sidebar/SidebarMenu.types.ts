export default interface SidebarMenuProps {
    open?: boolean;
    onToggle?: (arg0: boolean) => boolean;
    title: string;
    children: object;
    className?: string;
}
