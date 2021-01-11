export default interface DraggableTargetProps {
    dropTargetConfiguration: {
        accept: string;
        drop?: (item: any) => void;
    };
    onCollect: (monitor: any) => void;
}
