import React from "react";
import {
    Droppable,
    DragDropContext,
    DroppableProvided,
    DroppableStateSnapshot,
} from "react-beautiful-dnd";

const List = ({ children, title, onDragEnd, name }) => {
    return (
        <div className="flex flex-col w-6/12">
            <h2 className="text-2xl mb-2 mx-5">{title}</h2>
            <div className="">
                <Droppable droppableId={name}>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} className="">
                            <div className="p-3 rounded-lg  bg-gray-200 mx-2 gap-y-3  flex flex-col ">
                                {children}
                                {provided.placeholder}
                            </div>
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
};

export default List;