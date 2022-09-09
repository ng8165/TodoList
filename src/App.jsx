import React, { useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import Header from "./Header";
import Footer from "./Footer";
import Task from "./Task";
import Modal from "./Modal";

function App() {
    const [showModal, setModal] = useState(false);
    const [tasks, setTasks] = useState(JSON.parse(reactLocalStorage.get("tasks", "[]")));

    function saveTasks(title, content) {
        setModal(false);
        const newTasks = [...tasks, {title: title, content: content}];
        setTasks(newTasks);
        reactLocalStorage.set("tasks", JSON.stringify(newTasks));
    }

    function deleteTask(delIndex) {
        const newTasks = tasks.filter((task, index) => index !== delIndex)
        setTasks(newTasks);
        reactLocalStorage.set("tasks", JSON.stringify(newTasks));
    }

    return (
        <>
            <Header onAdd={() => setModal(true)}/>
            <main className="p-2">
                {tasks.map((n, index) => {
                    return <Task title={n.title} content={n.content} key={index} onDelete={() => deleteTask(index)} />;
                })}
            </main>
            <Modal show={showModal} close={() => setModal(false)} save={saveTasks} />
            <Footer />
        </>
    );
}

export default App;