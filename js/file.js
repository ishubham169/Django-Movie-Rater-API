PhonePe.PhonePe.loggingEnabled = true;
let sdk = await PhonePe.PhonePe.build(PhonePe.Constants.Species.web);
function generateToken(p1, p2) {
	PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {
		sdk.fetchAuthToken().then((res) => {
			console.log("Grant token data received = " + res)
			alert(res)
		}).catch((err) => {
			console.log("Error occurred while fetching the grant token: " + err)
			alert(err)
		})
	});
}