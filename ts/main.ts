import { EventHandler } from './controller/event-handler.js';
import { Game } from './model/game.js';
import { Render } from './view/render.js';

new Render()
new Game()
new EventHandler()

const ascii_logo = `
    ______             _               
   / _____)           | |              
  ( (____  ____  _____| |  _ _____     
   \\____ \\|  _ \\(____ | |_/ ) ___ |    
   _____) ) | | / ___ |  _ (| ____|    
  (______/|_| |_\\_____|_| \\_)_____)    
                                       `;

const ascii_iso = `
     ________        ________          
    /        \\      /        \\         
   /  /~~~~\\  \\    /  /~~~~\   \\        
   |  |    |  |    |  |    |  |     /  
   |  |    |  |    |  |    |  |    //  
   |  |    \\  \\____/  /    \\  \\__/ /   
  (o  o)    \\        /      \\     /    
   \\__/      ~~~~~~~~        ~~~~~     
                                       
 `;

const ascii_by = `  by: Dalairac Diego                  
`;
const ascii_github = `   github.com/ddalairac/game-snake     
                                       `;


console.log("%c" + ascii_logo +
    "%c" + ascii_iso +
    "%c" + ascii_by+
    "%c" + ascii_github,
    'background: #222; color: white;',
    'background: #222; color: #bada55;',
    'background: #222; color: white;',
    'background: #222; color: #bada55;')