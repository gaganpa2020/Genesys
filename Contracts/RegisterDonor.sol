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
		string location;//will try codes for location later
	}

	Donor[] public donors;
	mapping(uint => uint[]) public pledged_organs;



function addDonor(uint[] _pledgedOrgans, string _aadharHash, string _bloodGroup,uint _dob,string _location)  external {
        
        uint id = donors.push(Donor(msg.sender, _aadharHash,_bloodGroup,_dob,false,true,_location)) - 1;
        pledged_organs[id] = _pledgedOrgans;
      
     }


}
