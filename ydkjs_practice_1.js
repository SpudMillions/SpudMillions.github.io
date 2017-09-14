var SPENDING_THRESHOLD = 100;
var TAX_RATE = 1.08;
var BANK_ACCOUNT_BALANCE = 1000;
var PHONE_PRICE = 15;
var ACCESSORY_PRICE = 5;


var total_spent = 0;

function purchase_phone()
{
	while(total_spent < SPENDING_THRESHOLD && total_spent < BANK_ACCOUNT_BALANCE)
	{
		var new_total = total_spent + add_tax(PHONE_PRICE + ACCESSORY_PRICE)
		if(new_total < SPENDING_THRESHOLD && new_total < BANK_ACCOUNT_BALANCE)
		{
				total_spent = new_total;
		}
		else
		{
			total_spent = total_spent;
			break;
		}
	}
	
	print_total(total_spent);
}


function add_tax(amount_spent)
{
	return amount_spent * TAX_RATE;
}

function print_total(amount_spent)
{
	console.log('$' + amount_spent.toFixed(2));
}

purchase_phone();