pragma solidity ^0.4.24;

import "./RegisterRecipient.sol";


contract DeclareD is RegisterRecipient {


function DeclareDead(address _donorAddress,uint _timeOfDeath) external {
	//require that the person calling this function is a doctor
	uint donorId = addressToId[_donorAddress];
	donors[donorId].isAvailable = true;
	donors[donorId].timeOfDeath = _timeOfDeath;
	//call matching 
}

}