const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const imageElement = document.getElementById('imag')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}
function showTextNode(textNodeIndex) {

  var imagesDatabase = {
    '1': src="images/images.jpeg",
    '2': src="images/sad.gif",
    '3':src="images/survive.png",
    '4': src="images/choice.jpg",
    '5': src="images/coffin.jpg",
    '6': src="images/zombietiger.jpg",
    '7': src="images/coffin.jpg",
    '8': src="images/hammer.jpg",
    '9': src="images/coffin.jpg",
    '10': src="images/candies.jpg",
    '11': src="images/ap.jpg",
    '12': src="images/fire.gif",
    '13': src="images/coffin.jpg",
    '14': src="images/coffin.jpg",
    '16': src="images/zombie.jpg",
    '17': src="images/kidzombie.jpg",
    '18': src="images/kidzombie.jpg",
    '19': src="images/beep.gif",
    '20': src="images/beep.gif",
    '21': src="images/hellokai.gif",
    '22': src="images/kairiddle.gif",
    '23': src="images/kairiddle.gif",
    '24': src="images/bs1.jpg",
    '25': src="images/cave.jpg",
    '26': src="images/kailaugh.gif",
    '27': src="images/kairiddle.gif",
    '28': src="images/kailaugh.gif",
    '29': src="images/kairiddle.gif",
    '30': src="images/kailaugh.gif",
    '31': src="images/kaigif.gif",
    '32': src="images/kaigif.gif",
    '33': src="images/drago.gif",
    '34': src="images/coffin.jpg",
    '35': src="images/wooloo.jpg",
    '36': src="images/winwin.gif",
    '37': src="images/tombstone.jpg",
    


} 

  var theImageDiv = document.createElement('div');
  theImageDiv.innerHTML = "<img id='the-image-bro' src='" + imagesDatabase[textNodeIndex] + "' height=150 width=300 style='position: fixed; top: 3%; right: 14%'>"
  
  document.getElementById('imagediv').appendChild(theImageDiv);
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Heyy whatchaa doingggggg??',
    image: 'https://statics.sportskeeda.com/editor/2018/12/235c4-15444554699659-500.jpg',
    options: [
      {
        text: 'Nothing, just bored',
        nextText: 3
      },
      {
        text: 'IM BUSY',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: ':(',
    image: 'https://img.pngio.com/puss-n-boots-sad-face-gifs-tenor-pus-in-boots-sad-face-240_240.gif',
    options: [
      {
        text: 'Okay say',
        nextText: 3
      },
    ]
  },
  {
    id: 3,
    text: 'Wanna go on an adventure with me?',
    options: [
      {
        text: 'Yesss take me',
        nextText: 4
      },
    ]
  },
  {
    id: 4,
    text: 'Imagine that it has been 5yrs since the outbreak of the zombie virusand you have survived somehow in the basement but now you need to go to the safe zone. You pack some food and water. Now there is space for only on item more. Which one do you choose?',
    options: [

      {
        text: 'A badass hammer',
        setState: { hammer: true },
        nextText: 24
      },
      {
        text: 'A pan thingy',
        setState: { pan: true },
        nextText: 24
      },
      {
        text: 'Some candies',
        setState: { candies: true },
        nextText: 24
      },
      {
        text: 'Stop imagining',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'WOW WE GOT A SMARTASS OVER HERE. You grow up to become powerful person with your sheer smartness and wit. But one of your enemy gets mad and kills you with a Bazzuka. You die. You lose.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Time to follow the directions. While walking you come across a zombieg. Oh god.',
    options: [
      {
        text: 'Attack them with your hammer',
        requiredState: (currentState) => currentState.hammer,
        nextText: 7
      },
      {
        text: 'He must be hungry,lets give him the pan',
        requiredState: (currentState) => currentState.pan,
        nextText: 8
      },
      {
        text: 'Give him candies in return to spare your life',
        requiredState: (currentState) => currentState.candies,
        nextText: 9
      }
    ]
  },
  {
    id: 7,
    text: 'WHAT DO YOU THINK OF YOURSELF. THE ZOMBIE WAS SUPER HUNGRY. THE ZOMBIE GOT HUNGRY AND KILLED YOU. CMON MAN',
    options: [
      {
         text: 'Restart',
        nextText: -1

      }
    ]
  },
  {
    id: 8,
    text: 'Turns out it did want to fry something on the pan. The zombie is happy and lets you go ahead. He gives you a hammer he found after some dumb guy tried to kill him.',
    options: [
      {
        text: 'Fist bump the zombie',
        setState: { hammer: true },
        
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: 'Look at candyman over here, trying to bribe a zombie with candies.He is not a kid. You died',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The zombie is now your friend. He takes you to his spot and gives you some candies. Someone tried to bribe him with candies. lmao',
    
    options: [
      {
        text: 'Time to walk ahead',
        setState: { candies: true },
        nextText: 11
      },
    ]
  },
  {
    id: 11,
    text: 'You come across your frenemy who has turned into a zombie.',
    options: [
    {
      text: 'Attack it with your hammer',
      requiredState: (currentState) => currentState.hammer,
      nextText: 12
    },
    {
      text: 'He must be hungry lets give him the pan',
      requiredState: (currentState) => currentState.pan,
      nextText: 13
    },
    {
      text: 'Give him candies to spare your life',
      requiredState: (currentState) => currentState.candies,
      nextText: 14
    }
    ]
  },
  {
    id: 12,
    text: 'HELL YEAH BUDDY. He tries to eat you up but somehow your hammer turns into a lightning hammer or whatever that is and you burn that little shit alive. Good job',
    options: [
      {
        text: 'Alright lets go ahead.',
        nextText: 16
      }
    ]
  },
  {
    id: 13,
    text: 'BRO YOU CANNOT JUST ASSUME THAT EVERY ZOMBIE WANTS TO COOK. YOUR FRENEMY HATES IT AND KILLS YOU',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: 'YOUR FRENEMY HATES CANDIES. HE CALLED OUT HIS ZOMBIE FRIENDS AND YOU COULD NOT OUTRUN THEM ALL.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }  
    ]
  },
  {
    id: 16,
    text: 'You come across some kid zombies. They just chillin and playing',
    options: [
    {
      text: 'Hammer time',
      requiredState: (currentState) => currentState.hammer,
      nextText: 17
    },
    {
      text: 'Pan time',
      requiredState: (currentState) => currentState.pan,
      nextText: 18
    },
    {
      text: 'Candyman time',
      requiredState: (currentState) => currentState.candies,
      nextText: 19
    }

    ]
  },
  {
    id: 17,
    text: 'WHY WOULD YOU EVEN TRY TO KILL KIDS. Anyways they are much more dangerous than adult zombies. They eat up your brains. Mess with the kids and you get your guts spilt. You lose',
    options: [
      {
        text: 'Beep',
        nextText: -1
      }
    ]
  },
  {
    id: 18,
    text: 'Well did you epect the kids to cook food on their own. Mess with the kids you get your guts spilt',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 19,
    text: 'Nice call candyman. The kids were getting annoyed of you but they liked your candies. Now they think you are cool',
    options: [
      {
        text: 'I think they are cool too.',
        setState: { crown: true },
        nextText: 20
      }  
      
    ]
  },
  {
    id: 20,
    text: 'You are now friends with the kids. They give you the Queen s crown. Time to walk ahead ',
    options: [
      {
        text: 'Take the shortcut',
        nextText: 25
      },
      
      
      {
        text: 'Go towards the post office',
        nextText: 21
      }  
      
    ]
  },
  {
    id: 21,
    text: '"Greetings! We have a lot of survivors staying here. Come back when you have something valuable to contribute. ',
    options: [
      {
        text: 'Go back to the start',
        nextText: 24
      },
      {
        text: 'Put on the fancy crown',
        requiredState: (currentState) => currentState.crown,
        nextText: 22
      },

      
    ]
  },
  {
    id: 22,
    text: 'Holy shit, you have the Queen s crown. But are you smart enough to answer my riddles?',
    options: [
      {
        text: 'Pfft Obviously',
        nextText: 23
      }  
    ]
  },
  {
    id: 23,
    text: 'Voiceless it cries, Wingless it flutters, Mouthless it bites. What am I? ',
    options: [
      {
        text: 'Johnny',
        nextText: 26
      },
      {
        text: 'Wind',
        nextText: 27
      },
      {
        text: 'Lizard',
        nextText: 26
      }
    ]
  },
  {
    id: 24,
    text: 'Time to leave the basement. You have a map that leads you to the safe zone. Which way do you want to go?',
    options: [

      {
        text: 'Follow the directions on the map',
        nextText: 6
      },
      {
        text: 'Take a shortcut to reach the safe zone',
        nextText: 25
      },
      {
        text: 'Right towards the post office',
        nextText: 21
      }
    ]
  },
  {
    id: 25,
    text: 'There are a few zombies ahead. Maybe you should wait a bit in the shop across ',
    options: [
    {
      text: 'Go back',
      nextText: 24
    },
    {
      text: 'Super hammer time',
      requiredState: (currentState) => currentState.superhammer,
      nextText: 33
    },
    {
      text: 'I will just call my new friends for help',
      requiredState: (currentState) => currentState.crown,
      nextText: 37
    }

    ]
  },
  {
    id: 26,
    text: 'Wrong answer. Try again man.',
    options: [
      {
        text: 'One more try',
        nextText: 23
      }  
    ]
  },
  {
    id: 27,
    text: 'Ohwow smartypants. Ok next one. If your uncle s sister is not your aunt, what relation is she to you?',
    options: [
      {
        text: 'Your aunt',
        nextText: 28
      },
      {
        text: 'Your sister',
        nextText: 28
      },
      {
        text: 'Your mother',
        nextText: 29
      }
    ]
  },
  {
    id: 28,
    text: 'Wrong choice mate.',
    options: [
      {
        text: 'One more try',
        nextText: 27
      }  
    ]
  },
  {
    id: 29,
    text: 'Last one. How cool is Aashna?',
    options: [
      {
        text: 'Very cool',
        nextText: 31
      },
      {
        text: 'Cool enough',
        nextText: 30
      },
      {
        text: 'Eh',
        nextText: 30
      }
    ]
  },
  {
    id: 30,
    text: 'Whhaaaattttt? :(',
    options: [
      {
        text: 'Smh Aashna',
        nextText: 29
      }  
    ]
  },
  {
    id: 31,
    text: 'Amazing! Genius! You can now come inside and seek refuge. The shortcut towards the safe zone has a bunch of zombies surrounded. Can you get through them? ',
    options: [
      {
        text: 'Uh sure',
        setState: { superhammer: true },
        nextText: 32
      }, 
    ]
  },
  {
    id: 32,
    text: 'Brilliant! I have modified your hammer and made it stronger! You will have to answer a math question to charge it. Go slay the zombies!',
    options: [
      {
        text: 'Leggo',
        nextText: 25
      }, 
    ]
  },
  {
    id: 33,
    text: 'The hungry zomies are all over the avenue. They look monstrous! You activate your hammer. What is 51 x 3? ',
      options: [
        {
          text: '113! Slaying time!',
          nextText: 34
        },
        {
          text: '153! Fear me monster!',
          nextText: 36
        },
        {
          text: '3 Lmao just kill me i cant math',
          nextText: 35
        }
      ]
    },
    {
      id: 34,
      text: 'bro you got eaten alive. Cmon smh. You lose',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }  
      ]
    },
    {
      id: 35,
      text: 'You start to run away as the math was hard. Just as tthe zombies are about to get you, BANG. There is a man wearing a cowboy hat on a horse. He buys you some time to escape. While escaping when you look back you see the kids trying to fight off the zombies for you. The man gets eaten up and the kids too are wounded. Ogod. You escape sucessfully and reach the safe zone. BUT AT WHAT COST? [WIN ENDING 1 OF 3]',
      options: [
        {
          text: 'Let me try again',
          nextText: -1
        }  
      ]
    },
    {
      id: 36,
      text: 'The hammer powers up. The zombies are no match for your might and intellect. You reach the safe zone. Later you develop a vaccine and SAVE THE WORLD. Humans now coexist with zombies [WIN ENDING 2 OF 3] ',
      options: [
        {
          text: 'Lets try again',
          nextText: -1
        }  
      ]
    },
    {
      id: 37,
      text: 'You enter the cave with your friends. THERE IS A CROWD OF HIDEOUSWRETCHED ZOMBIES THERE. The kids try to eat them but it kills away 2 of them. You attack them with your hammer but it does almost no damage. Your zombie friend sacrifices himself to save you. The last kid and you kill them. But the kid does not want to live in a world without the other kids, so he kills himself. You should have gone in more prepared. Congrats, zombie slayer. You reach the safe zone.You won, but can you even call that a Victory? [WIN ENDING 3 of 3] ',
      options: [
        {
          text: 'Let me try again',
          nextText: -1
        }  
      ]
    },




  







]






startGame()
