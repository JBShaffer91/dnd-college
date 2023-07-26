function Story({ name, characterClass, gender, race }) {
  let villainMotivation;
  let characterStory;

  if (characterClass.toLowerCase() === 'paladin') {
    villainMotivation = `Professor Malazar, the new Dorm Parent of the Sourcerers, has always held a grudge against the Paladins. He believes they held him back in his magical studies, always catching him in his experiments with dangerous magic. He thinks they're nothing more than a bunch of goodie-two-shoes who can't mind their own business.`;
    characterStory = `As a Paladin, you've always been dedicated to upholding justice and righteousness. But when Professor Malazar arrives at the college, you can't shake the feeling that something's not right. It's up to you, ${name}, to uncover the truth and stop whatever he's planning.`;
  } else {
    villainMotivation = `Professor Malazar, the new Dorm Parent of the Sourcerers, has always held a grudge against the Paladins. He believes they held him back in his magical studies, always catching him in his experiments with dangerous magic. He thinks they're nothing more than a bunch of goodie-two-shoes who can't mind their own business.`;
    characterStory = `As a ${characterClass}, you've always been focused on your own studies and growth. But when Professor Malazar arrives at the college, you can't shake the feeling that something's not right. It's up to you, ${name}, to uncover the truth and stop whatever he's planning.`;
  }

  return (
    <div>
      <h1>{name}'s Adventure</h1>
      <p>{name} was a {gender} {race} {characterClass} who lived in a small village. One day, {name} decided to go on an adventure...</p>
      <p>{villainMotivation}</p>
      <p>{characterStory}</p>
    </div>
  );
}

export default Story;
