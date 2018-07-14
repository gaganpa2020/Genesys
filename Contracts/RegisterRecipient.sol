pragma solidity ^0.4.24;

import "./Ownable.sol";

contract RegisterRecipient is RegisterDonor {
	struct Recipient{
		//basic details of a donor
		address recipient_address;
		string aadhar_hash;
		string blood_group;
		uint dob;
		bool isAvailable;//changes to true on death
		bool hasRecieved;
	    uint lat;
	    uint long;
	}

	Recipient[] public recipients;
	mapping(uint => uint[]) public required_organs;



function addRecipient(uint[] _requiredOrgans, string _aadharHash, string _bloodGroup,uint _dob,uint _lat,uint _long)  external { //add case where recipient can only be added by a doc
        
        uint id = recipients.push(Recipient(msg.sender, _aadharHash,_bloodGroup,_dob,true,false,_lat,_long)) - 1;
        required_organs[id] = _requiredOrgans;
      
     }


}
