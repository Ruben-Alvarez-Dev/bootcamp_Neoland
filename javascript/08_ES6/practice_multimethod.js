const streamers1 = [
	{name: 'A', age: 10, gameMorePlayed: 'Minecraft'},
	{name: 'B', age: 11, gameMorePlayed: 'League of Legends'}, 
	{name: 'C', age: 12, gameMorePlayed: 'League of Legends'},
	{name: 'D', age: 13, gameMorePlayed: 'Among Us'},
    {name: 'E', age: 14, gameMorePlayed: 'Minecraft'},
	{name: 'F', age: 15, gameMorePlayed: 'League of Legends'}, 
	{name: 'G', age: 16, gameMorePlayed: 'League of Legends'},
	{name: 'H', age: 17, gameMorePlayed: 'Among Us'},
    {name: 'I', age: 18, gameMorePlayed: 'Minecraft'},
	{name: 'J', age: 19, gameMorePlayed: 'League of Legends'}, 
	{name: 'K', age: 20, gameMorePlayed: 'League of Legends'},
	{name: 'L', age: 21, gameMorePlayed: 'Among Us'},
    {name: 'M', age: 22, gameMorePlayed: 'League of Legends'}, 
	{name: 'N', age: 23, gameMorePlayed: 'League of Legends'},
	{name: 'O', age: 24, gameMorePlayed: 'Among Us'},
    {name: 'P', age: 25, gameMorePlayed: 'Minecraft'},
	{name: 'Q', age: 26, gameMorePlayed: 'League of Legends'}, 
	{name: 'R', age: 27, gameMorePlayed: 'League of Legends'},
	{name: 'S', age: 28, gameMorePlayed: 'Among Us'},
    {name: 'T', age: 29, gameMorePlayed: 'Minecraft'},
	{name: 'U', age: 30, gameMorePlayed: 'League of Legends'}, 
	{name: 'V', age: 31, gameMorePlayed: 'League of Legends'},
	{name: 'W', age: 32, gameMorePlayed: 'Among Us'}
];


const result = streamers1
    .filter(edad => edad.age > 18)
    .filter(game => game.gameMorePlayed == `Minecraft`);

console.log(result);