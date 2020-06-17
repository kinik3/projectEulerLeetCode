function lastTenPow(base,pow){
	var lastTen = 1;
	while(pow > 0){
		lastTen = (lastTen * base) % 10000000000;
		pow--;
	}
	return lastTen;
}

var lastTenSum = 0;
for(var n = 1; n <= 1000; n++){
	lastTenSum = (lastTenSum + lastTenPow(n,n)) % 10000000000;
}

console.log(lastTenSum);