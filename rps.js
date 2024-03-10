
const game = () => {
	let ps = 0;
	let computerScore = 0;
	let moves = 0;
 
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn, paperBtn, scissorBtn];
		const computerOptions = ['rock', 'paper', 'scissors']

		playerOptions.forEach(option => {
			option.addEventListener('click', function () {

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10 - moves}`;


				const choiceNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText, computerChoice)

				if (moves == 10) {
					gameOver(playerOptions, movesLeft);
				}
			})
		})

	}
	const winner = (player, computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if (player === computer) {
			result.textContent = 'Tie'
		}
		else if (player == 'rock') {
			if (computer == 'paper') {
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			} else {
				result.textContent = 'Player Won'
				ps++;
				playerScoreBoard.textContent = ps;
			}
		}
		else if (player == 'scissors') {
			if (computer == 'rock') {
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			} else {
				result.textContent = 'Player Won';
				ps++;
				playerScoreBoard.textContent = ps;
			}
		}
		else if (player == 'paper') {
			if (computer == 'scissors') {
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			} else {
				result.textContent = 'Player Won';
				ps++;
				playerScoreBoard.textContent = ps;
			}
		}
	}


	const gameOver = (playerOptions, movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})


		chooseMove.innerText = 'game over!'
		movesLeft.style.display = 'none';

		if (ps > computerScore) {
			result.innerText = 'You Won The Game'
			
		}
		else if (ps < computerScore) {
			result.innerText = 'oops!! You Lost The Game';
			
		}
		else {
			result.innerText = 'Tie';
			
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click', () => {
			window.location.reload();
		})
	}
	playGame();

}

game();
