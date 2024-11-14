   // {
   //  	stepHeading:"jj",
   //  	firstButton:"No",
   //      secondButton:"Yes",
   //      input:{label:"Ear Test result", placeholder:"Enter"},
   //      rating: 1
   //  }
interface Step {
  level: number;
  stepHeading: React.ReactNode;
  rating: number;
  firstButton:"No",
  secondButton:"Yes",
}


export const Step5 = [
    {
    	level:1,
    	stepHeading:"How well does your child understand words, sentences, and instructions well?",
        rating: 1
    },
    {
    	level:2,
    	stepHeading:`How well does your child point to objects or pictures when they are named? `,
        rating: 1
    },
    {
    	level:3,
    	stepHeading:`How well Can your child follow simple instructions? (e.g., "Come here," "Give me the ball.")`,
        rating: 1
    },
    {
    	level:4,
    	stepHeading:`How well can your child understand and respond to questions appropriately?`,
        rating: 1
    },
    {
    	level:5,
    	stepHeading:`How well does your child understand descriptive concepts such as big/little, fast/slow?`,
        rating: 1
    },
    {
    	level:6,
    	stepHeading:`How well can your child identify and name common objects and people in their environment?`,
        rating: 1
    },
    {
    	level:7,
    	stepHeading:`How well does your child produce sounds, words, and sentences?`,
        rating: 1
    },
    {
    	level:8,
    	stepHeading:`How well can your child use words to express needs and wants?  (e.g."I want juice.")`,
        rating: 1
    },
    {
    	level:9,
    	stepHeading:`How frequently does your child use gestures to communicate (e.g., pointing, nodding)`,
        rating: 1
    },
    {
    	level:10,
    	stepHeading:`Can your child combine words into short phrases or sentences? (e.g., "more juice," "big truck")`,
        firstButton:"No",
        secondButton:"Yes",
    },
    {
    	level:11,
    	stepHeading:`Does your child initiate conversations or respond when spoken to?`,
        firstButton:"No",
        secondButton:"Yes",
    },
    {
    	level:12,
    	stepHeading:`Can your child tell simple stories or describe events?`,
        firstButton:"No",
        secondButton:"Yes",
    },
    {
    	level:13,
    	stepHeading:`Does your child ask questions and seek information?`,
        firstButton:"No",
        secondButton:"Yes",
    },
    {
    	level:14,
    	stepHeading:` How clear is your child's speech? `,
        rating: 1
    },
    {
    	level:15,
    	stepHeading:`Are there specific sounds or words your child has difficulty pronouncing? If yes, please list.`,
        input:{label:"Medications", placeholder:"Enter"},
    },
    {
    	level:16,
    	stepHeading:`How does your child use language in social contexts?`,
        rating: 1
    },
    {
    	level:17,
    	stepHeading:`How well does your child take turns in conversation and use greetings/farewells appropriately? `,
        rating: 1
    },
    {
    	level:18,
    	stepHeading:`Please provide examples of your child's conversation skills`,
        firstButton:"No",
        secondButton:"Yes",
    },
    {
    	level:19,
    	stepHeading:`Does your child show any signs of stuttering or speech disfluencies? If yes please describe`,
        input:{label:"Medications", placeholder:"Enter"},
    },
    {
    	level:20,
    	stepHeading:`How would you rate your child's voice quality, pitch, volume, and intonation? `,
        rating: 1
    },
]