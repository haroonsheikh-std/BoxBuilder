import Card from "../Card/index";
import List from "../List/index";
import {
    DragDropContext,
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { useState } from "react";

const obj = {
    title: "Advance FIlters",
    subtitle: "You are allowed to use advance products and search filters",
}

const Incorporate = ({ send }) => {

    const itemsNormal = {
        available: [
            {
                id: 1,
                uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
                title: 'Loading Speed',
                subtitle: "null",
                updatedAt: "6 days ago",
            },
            {
                id: 2,
                uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
                title: "Can add products using a collection",
                subtitle: "When building a step which contains products, you can tell the builder to load all products in a collection.",
                updatedAt: "2 days ago",
            },
            {
                id: 3,
                uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a449",
                title: "Can add individual products        ",
                subtitle: "When building a step which contains products, you can tell the builder to load specific products that you select.	                ",
                updatedAt: "3 days ago",
            },
            {
                id: 4,
                uuid: "52f9df20-2398-4c4d-b72c-7bfa4398a449",
                title: "Recommended Product Limits",
                subtitle: "null",
                updatedAt: "3 days ago",
            },
            {
                id: 5,
                uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a450",
                title: "Can show hidden products",
                subtitle: "Once products have been added to the builder, you can then hide them from the Online Store and they'll remain on the builder.	",
                updatedAt: "6 days ago",
            },
            {
                id: 6,
                uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a451",
                title: "Can edit the liquid code",
                subtitle: "Once products have been added to the builder, you can then hide them from the Online Store and they'll remain on the builder.",
                updatedAt: "2 days ago",
            },
            {
                id: 7,
                uuid: "52f9df20-9393-9z4e-b72c-7bfa4398a451",
                title: "Advance Filters",
                subtitle: "You were allowed to use products and search filters",
                updatedAt: "2 days ago",
            }
        ],
        assigned: [
        ],
    };

    const [items, setItems] = useState(itemsNormal);

    const removeFromList = (list, index) => {
        const result = Array.from(list);
        const [removed] = result.splice(index, 1);
        return [removed, result];
    };

    const addToList = (list, index, element) => {
        const result = Array.from(list);
        result.splice(index, 0, element);
        return result;
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            console.log(result);
            return;
        }
        const listCopy = { ...items };
        const sourceList = listCopy[result.source.droppableId];
        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            result.source.index
        );
        listCopy[result.source.droppableId] = newSourceList;

        const destinationList = listCopy[result.destination.droppableId];
        listCopy[result.destination.droppableId] = addToList(
            destinationList,
            result.destination.index,
            removedElement
        );
        setItems(listCopy);
        send(listCopy)
    };

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex p-1">
                    <List title="Available Features" onDragEnd={onDragEnd} name="available">
                        {items.available.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id + ""} index={index}>
                                {(
                                    provided,
                                    snapshot
                                ) => (
                                    <div>
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Card data={item} />
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </List>
                    <List title="Selected Features" onDragEnd={onDragEnd} name="assigned">
                        {items.assigned.map((item, index) => (
                            <Draggable draggableId={item.uuid} index={index} key={item.id}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Card data={item} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </List>
                </div>
            </DragDropContext>
        </>
    );
};

export default Incorporate;