import { useState } from "react";
import { Card } from "../components/Card";

export function Jobs(){
    const generalCards = [
                    {id:1, heading:"Practice Questions", description: "Questions will be shown in a flashcard format allowing you to practice answering general questions on the spot"},
                    {id:2, heading:"View Questions", description: "View all the questions that may come up in interviews and see recommendations for how to answer"}];
    
    const technicalCards = [
                    {id:1, heading:"Practice Questions", description: "Questions will be shown in a flashcard format allowing you to practice answering technical questions on the spot"},
                    {id:2, heading:"OOP", description: "Learn the key concepts of Object Oriented Programming"},
                    {id:3, heading:"Methodologies", description: "Learn about the different methodologies of creating software and how they can be used to create quality products"},
                    {id:4, heading:"Principles", description: ""},
                    {id:5, heading:"Databases", description:""}];

    const technicalTopics = ["OOP", "Methodologies", "Principles", "Databases"];
    const [content, setContent] = useState("1");

    function handleTopicClicked(index){
        switch (index){
            case 0:
                setContent("0");
                break;
            case 1:
                setContent("1");
                break;
            case 2:
                setContent("2");
                break;
            case 3:
                setContent("3");
        }
    }
    
    return(
        <div>
            <div className="jobs-navbar">
                <h3>General</h3>
                <button>Practice</button>
                <button>Questions</button>
                <br/>
                <h3>Technical</h3>
                <button>Practice</button>
                {technicalTopics.map((topic, index) => 
                    <button key= {index} onClick={() => handleTopicClicked(index)}>
                        {topic}
                    </button>
                )}
            </div>
            {content}
        </div>);
        
}