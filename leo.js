/* 
import javax.swing.*;

public class pythagoras{
	public static void main (String[] arg) {
	double a = Double.parseDouble (JOptionPane.showInputDialog("F\u00F6rsta sidan i triangeln"));
	double b = Double.parseDouble (JOptionPane.showInputDialog("Andra sidan i triangeln"));
	double c = Math.sqrt(a*a + b*b);
	JOptionPane.showMessageDialog (null, "Hypotenusans l\u00E4ngd \u00E4r " + c);
	}
*/

const triangelSida1 = document.querySelector('#input-field1');
const triangelSida2 = document.querySelector('#input-field2');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const Sida1 = triangelSida1.value;
    const Sida2 = triangelSida2.value;
    const pythagoras = Math.sqrt(Sida1*Sida1 + Sida2*Sida2)
    const messageBox = document.querySelector('#message-box');
    
    if (isNaN(Sida1)) {
        let message = document.createElement('p');
        message.textContent = `Error, one of the values is not a number`;
        messageBox.appendChild(message);
    }
    else if (isNaN(Sida2)) {
        let message = document.createElement('p');
        message.textContent = `Error, one of the values is not a number`;
        messageBox.appendChild(message);
    }
    else {
        let message = document.createElement('p');
        message.textContent = `Hypotenusan är ${pythagoras} cm lång`;
        messageBox.appendChild(message);
    }
});
