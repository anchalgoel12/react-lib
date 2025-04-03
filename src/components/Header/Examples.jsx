import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import TabButtons from "../TabButtons.jsx";

export default function Examples(){
    const [selectedTopic , setSelectedTopic ]= useState();

    function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
    return(
        <section id="examples"> 
        <h2>Examples</h2>
        <menu>
          <TabButtons isSelected={selectedTopic ==="components"} onSelect = {() => handleClick('components')}> Components</TabButtons>
          <TabButtons isSelected={selectedTopic ==="jsx"} onSelect = {() => handleClick('jsx')}> JSX</TabButtons>
          <TabButtons isSelected={selectedTopic ==="props"} onSelect = {() => handleClick('props')}>Props</TabButtons>
          <TabButtons isSelected={selectedTopic ==="state"} onSelect = {() => handleClick('state')}>State</TabButtons>

        </menu>
    {!selectedTopic ? (<p>Please select a topic</p>):(<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
    {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div> )}
        </section>
    )
}