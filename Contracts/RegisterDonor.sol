pragma solidity ^0.4.24;

import "./Ownable.sol";

contract RegisterDonor is Ownable {
	struct Donor{
		//basic details of a donor
		address donor_address;
		string aadhar_hash;
		string blood_group;
		uint dob;
		bool isAvailable;//changes to true on death
		bool optIn; //for having possibilitty to opt out...later
	    uint lat;
	    uint long;
	    uint timeOfDeath;
	}

	Donor[] public donors;
	mapping(uint => uint[]) public pledged_organs;



function addDonor(uint[] _pledgedOrgans, string _aadharHash, string _bloodGroup,uint _dob,uint _lat,uint _long)  external {
        
        uint id = donors.push(Donor(msg.sender, _aadharHash,_bloodGroup,_dob,false,true,_lat,_long,0)) - 1;
        pledged_organs[id] = _pledgedOrgans;
      
     }

function getPledgedOrgans(uint _donorId) public returns(uint[]) {
	return pledged_organs[_donorId];
}     


}
