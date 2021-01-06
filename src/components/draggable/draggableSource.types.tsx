export default interface DraggableSourceProps {
    dragTargetConfiguration: {
        item: { type: string },
    }
    onCollect: (monitor: any) => void,
}
