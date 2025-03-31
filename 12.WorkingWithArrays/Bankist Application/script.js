'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const loginForm = document.querySelector('.login');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// 1. Displayed Movements/Transactions by creating elements in the DOM using insertAdjacentHTML
const displayMovements = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((mov, ind) => {
    const movType = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${movType}">${
      ind + 1
    } ${movType}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    // insertAdjacentHTML('afterbegin', html) is used to insert each movement at the beginning of the container, so all movements are rendered. If you used innerHTML inside the loop, it would overwrite the content each time, leaving only the last movement rendered.
  });
};

// 2. Compute Usernames
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

// 3. Display Summary
const calcDisplaySummary = (movements, interestRate) => {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `${income}€`;

  const outgoes = movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumOut.textContent = `${Math.abs(outgoes)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//
const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

function showLogoutBtn() {
  loginForm.innerHTML = `<button class="logout_btn" onclick="${() =>
    logout()}">Logout</button>`;
}

let currentAccount;

function updateUI() {
  calcDisplayBalance(currentAccount);
  // Display Movements
  displayMovements(currentAccount.movements);
  // Display Balance Summary
  calcDisplaySummary(currentAccount.movements, currentAccount.interestRate);
}

// 4. User Login
const loginUser = event => {
  event.preventDefault();
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Update UI
    updateUI();
    // showLogoutBtn();
    inputLoginPin.value = '';
    inputLoginUsername.value = '';
  }
};

const handleTransferMoney = e => {
  e.preventDefault();
  const receiverAcc = accounts.find(
    account => account.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  if (!receiverAcc) {
    alert('Transfer account not found');
  } else if (receiverAcc.username === currentAccount.username) {
    alert('Cannot transfer to same account');
  } else if (!amount || amount <= 0) {
    alert('Amount should be greater than 0');
  } else if (currentAccount.balance < amount) {
    alert('Insufficient balance');
  } else {
    alert('Amount transferred successfully');
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    inputTransferAmount.value = inputTransferAmount.value = '';
    updateUI();
  }
};

const handleCloseAccount = e => {
  e.preventDefault();

  if (!inputCloseUsername || !inputClosePin) {
    alert('Username/pin is required');
  } else if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const closeAccount = account =>
      account.username === inputCloseUsername.value;

    accounts.splice(accounts.findIndex(closeAccount), 1);
    console.log('accounts', accounts);
    inputClosePin.value = inputCloseUsername.value = '';
    containerApp.style.opacity = 0;
  }
};

// Script Execution Starts Here
createUserNames(accounts);
btnLogin.addEventListener('click', e => loginUser(e));
btnTransfer.addEventListener('click', e => handleTransferMoney(e));
btnClose.addEventListener('click', e => handleCloseAccount(e));
