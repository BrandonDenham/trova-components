import { SimpleComponent } from "../../shared/interfaces/SimpleComponent.types";

export default interface DraggableTargetProps extends SimpleComponent {
    dropTargetConfiguration: {
        accept: string;
        drop?: (item: any) => void;
    };
    onCollect: (monitor: any) => void;
}
