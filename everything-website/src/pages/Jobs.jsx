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

    return(
        <div>
            <h2>General Interview Questions</h2>
            <div className="card-container">
                {generalCards.map((card) => (
                    <Card id={card.id} heading={card.heading} description={card.description}/>))}        
            </div>
            <h2>Technical Questions</h2>
            <div className="card-container">
                {technicalCards.map((card) => (
                    <Card id={card.id} heading={card.heading} description={card.description}/>))}        
            </div>
        </div>);
        
}