var spacer_height = '50px';
var input_height = '85vh'; //vh: view height. 85vh = 85% of the available vertical space

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
  	// Change flex-direction to row
	var main = document.querySelector('main');
	main.classList.add('flex-row');
	main.classList.remove('flex-col');
	
	var output = main.childNodes[0];
	// Wait until the output_messages are loaded
	let stateCheck = setInterval(() => {
		// Resize spacer at bottom of messages
		if (output_messages = output.childNodes[0].childNodes[0].childNodes[0]) {
			var output_spacer = output_messages.childNodes[output_messages.childNodes.length - 1];
			output_spacer.classList.remove('h-32');
			output_spacer.classList.remove('md:h-48');
			//output_spacer.classList.add('h-12');
			output_spacer.style.setProperty('min-height', spacer_height);
			output_spacer.style.setProperty('max-height', spacer_height);
			
			// Remove the loop
		    clearInterval(stateCheck);
		}
	}, 100);
	
	// Resize input container
	var input = main.childNodes[1];
	input.classList.add('flex-1');
	input.classList.remove('absolute');
	input.classList.remove('w-full');
	
	// Remove info message under text field
	var input_text = input.childNodes[1];
	input_text.classList.add('hidden');
	
	// Wait until the elements are ready
	stateCheck = setInterval(() => {
		// Get the textarea input field	
		if (input_field = input.childNodes[0].childNodes[0].childNodes[1].childNodes[0]) {
			// Remove set styling
			input_field.style.removeProperty('max-height');
			input_field.style.removeProperty('height');
			input_field.style.removeProperty('overflow-y');
			
			// Set desired height and overflow behavior
			input_field.style.setProperty('min-height', input_height);
			input_field.style.setProperty('max-height', input_height);
			input_field.style.setProperty('overflow-y', 'scroll');
		
			clearInterval(stateCheck);
		}
	}, 100);
  }
};
