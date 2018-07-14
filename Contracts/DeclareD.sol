pragma solidity ^0.4.24;

import "./RegisterRecipient.sol";


contract DeclareD is RegisterRecipient {

function DeclareDead(address _donorAddress,uint _timeOfDeath) external {
	//require that the person calling this function is a doctor
	uint donorId = addressToId[_donorAddress];
	donors[donorId].isAvailable = true;
	donors[donorId].timeOfDeath = _timeOfDeath;
	//call matching 
	match_donor(donorId);
}




function match_donor(uint _donorId) public {
uint[] memory pledged_organs = getPledgedOrgans(_donorId);

for(uint memory i = 0;i<pledged_organs.length;i++){
	uint memory organ_to_find = pledged_organs[i];

	for(uint memory j=0;j<recipients.length;j++){
		if (organ_to_find == recipients[j].required_organ){
			//match found...trigger
			

		}
	}

}

}


}