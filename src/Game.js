import React, { useState } from 'react';
import Story from './Story';

function Game() {
    const [name, setName] = useState('');
    const [characterClass, setCharacterClass] = useState('');
    const [gender, setGender] = useState('');
    const [race, setRace] = useState('');
    const [showStory, setShowStory] = useState(false);
    const [alignment, setAlignment] = useState('');
    const [lawfulness, setLawfulness] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Character created! Name: ${name}, Class: ${characterClass}, Gender: ${gender}, Race: ${race}, Alignment: ${alignment} ${lawfulness}`);
        setShowStory(true);
    };

    if (showStory) {
      return <Story name={name} characterClass={characterClass} gender={gender} race={race} />;
  }

    return (
        <div>
            <h1>Welcome to D&D College!</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Gender:
                    <select value={gender} onChange={e => setGender(e.target.value)}>
                        <option value="">--Please choose a gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                    </select>
                </label>
                <label>
                  Race:
                  <select value={race} onChange={e => setRace(e.target.value)}> {/* Add value and onChange here */}
                    <option value="">--Please choose a race--</option>
                    <option value="">--Please choose a class--</option>
                    <option value="aarakocra">Aarakocra</option>
                    <option value="aasimar">Aasimar</option>
                    <option value="bugbear">Bugbear</option>
                    <option value="centaur">Centaur</option>
                    <option value="changeling">Changeling</option>
                    <option value="dragonborn">Dragonborn</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="elf">Elf</option>
                    <option value="firbolg">Firbolg</option>
                    <option value="genasi">Genasi</option>
                    <option value="gnome">Gnome</option>
                    <option value="goblin">Goblin</option>
                    <option value="goliath">Goliath</option>
                    <option value="half-elf">Half-Elf</option>
                    <option value="half-orc">Half-Orc</option>
                    <option value="halfling">Halfling</option>
                    <option value="hobgoblin">Hobgoblin</option>
                    <option value="human">Human</option>
                    <option value="kalashtar">Kalashtar</option>
                    <option value="kenku">Kenku</option>
                    <option value="kobold">Kobold</option>
                    <option value="leonin">Leonin</option>
                    <option value="lizardfolk">Lizardfolk</option>
                    <option value="loxodon">Loxodon</option>
                    <option value="minotaur">Minotaur</option>
                    <option value="orc">Orc</option>
                    <option value="rabbitfolk">Rabbitfolk</option>
                    <option value="satyr">Satyr</option>
                    <option value="shifter">Shifter</option>
                    <option value="simic hybrid">Simic Hybrid</option>
                    <option value="tabaxi">Tabaxi</option>
                    <option value="tiefling">Tiefling</option>
                    <option value="triton">Triton</option>
                    <option value="vedalken">Vedalken</option>
                    <option value="verdan">Verdan</option>
                    <option value="warforged">Warforged</option>
                    <option value="yuan-ti pureblood">Yuan-ti Pureblood</option>
                  </select>
                </label>
                <label>
                    Class:
                    <select value={characterClass} onChange={e => setCharacterClass(e.target.value)}>
                        <option value="">--Please choose a class--</option>
                        <option value="barbarian">Barbarian</option>
                        <option value="bard">Bard</option>
                        <option value="cleric">Cleric</option>
                        <option value="druid">Druid</option>
                        <option value="fighter">Fighter</option>
                        <option value="monk">Monk</option>
                        <option value="paladin">Paladin</option>
                        <option value="ranger">Ranger</option>
                        <option value="rogue">Rogue</option>
                        <option value="sorcerer">Sorcerer</option>
                        <option value="warlock">Warlock</option>
                        <option value="wizard">Wizard</option>
                    </select>
                </label>
                <label>
                    Alignment:
                    <select value={alignment} onChange={e => setAlignment(e.target.value)}>
                        <option value="">--Please choose an alignment--</option>
                        <option value="Good">Good</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Evil">Evil</option>
                    </select>
                </label>
                <label>
                    Lawfulness:
                    <select value={lawfulness} onChange={e => setLawfulness(e.target.value)}>
                        <option value="">--Please choose lawfulness--</option>
                        <option value="Lawful">Lawful</option>
                        {alignment !== "Neutral" && <option value="Neutral">Neutral</option>}
                        <option value="Chaotic">Chaotic</option>
                    </select>
                </label>
                <button type="submit">Create Character</button>
            </form>
        </div>
    );
}

export default Game;
