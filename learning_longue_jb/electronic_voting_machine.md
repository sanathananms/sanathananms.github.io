# The Indian Electronic Voting Machine

**Chai and Why? The Indian Electronic Voting Machine - Dinesh Sharma 21/4/2019**

<!-- https://youtu.be/E0ORLvgM8ro?si=IosPPusFvnAtWc92

About the speaker: Dinesh Sharma is an Emeritus Fellow at the Dept. of Electrical Engineering, IIT Bombay, and a member of the Technical Experts Committee appointed by the Election Commission as an independent body to help in development and monitoring of electronic voting equipment and to advise it on technical matters. Among several other honours, he received a special felicitation by the president of India for his contributions as a member of the Technical Experts Committee of Election Commission in 2017. -->

The Electronic Voting Machine was proposed in 1977 and Electronics Corporation of India (ECIL) was tasked with the development of the same. In 1979, a working model was evolved and was showcased to various political parties on 6 August 1980. Bharat Electronics (BEL) and ECIL were tasked with manufacturing EVMs.The EVMs were first trialed in 1982 in the by-election to Paravur assembly constituency in Kerala in a limited number of polling stations.

Technical Expect committe is completely an honarary body
They are tough on election commision

- Indian EVMs are different form all other EVMs in the world
  - All other EVMS are private companies
  - the priviate companies do not follow the legislation
  - Manufactued by BEL (Defense) and ECIL (BARC) inbult infra structure (stategic parts)
  - These companies have strong source code audit process to ensure that rogue routines cannot be inserted inside the SW
  - source coude is reviewed by 3rd party independent review
  - TEC not only reviews the code but also suggest additional safety measures
- This EMS can be used only for voting (very dedicated)
- Fixed embeded system- only designed for voting (other even are run on Micro controllers that can be programmed)
- BU does not connector (onlu wires comes out of BU)
- All countings are done in CU
- VSDU is just a display for VVPAT
- CU is controlled by the precising officer
- Program can be programmed only once
- M1 (outdates), M2 (2006), M3 (2015) EVM are used each has a life time of 15 years
- Machines replacement (due to rust) does not means EVM malfuction
  - VVPAT was not there when M2 was designed
- EVM can talk to each other through encoded data sent over dedicated cables
- There are no external connection to EVN through wire or wireless
- Not even power supplly mains (zero connection to the outside world, i.e. completely)
- Micro controllers are one time programanble
  - so something happens to the machine, we need to dispose that machine (no replaceable or programmable component)
- No bluetooth
- Even RF check is performed in the vicinity of the EVMS
- It is programmed inside BARC reviewd by TEC over a period of 1 years.

## BU/CU has a challenge response system

- Authenticater can be used to see Programs can be manipulaed or not
- Authenticator send a challenge number and a random address to the machine
- Machine take 16 bytes from this address and the cahllenge number and computed this function and returns that variable to the authenticator.
- Authenticaor computes the same fuction with the good program and cross verify these numbers generated
- This autheticator repeats this process many times and compare the values of the generated from EVM and with the Authenticator
- If progrma is tampered, the EVM has no clue what number will come and what function has to be generated
- In M2 even the unused flash memory has special pattern of numbers that an only authenticator can be able to recognize
- In M3, the autheticator can also ask the stack where even the subroutines are being called

### During the polls

- In each minumte maximum of 12 votes can be casted (min time interval is 12 seconds)
- This is only EVM with design contributions from
- First level check was conducted before polls
- 2 types randomization (district and whcih polling stations) - before nomination after nomination
- mock polls are conducted before polls are being conducted
- all EVM are sealed by most expensive paper from Nasik building press currecy press
- this papers is used for covering the EVM
- these papers are sealed by candidate signaure
- all condidate puts seal on the locks
- District majistrate + candidate
- Physical access to the EVM is close to
- In mock polls every buttons might be used
- At teh end of the polls, the officer press the poll closing button
- Votings can not be enabled after this untill the results has been seen and vote counts has been cleared
- The machine has a real time clock that records time of poll opening and poll closing
- Every 2 hours the prciding officer tallies the number of entries in the register with number of votes registered in the EVMs
- Not even 1 descrepency of 1 votes has be ever reported till now (4 crores)

## Where can go wrong??

- When preciding officer forget to remove the slips from VVPAT
- or when election commision forget to resent the CU before the polls started
- Machines are destroyed
- Even the fake videos spreading is from M1 that was stolen
  - All demo was done by Hari prasad
  - Paper by hariprasad: https://ecirtam.net/autoblogs/autoblogs/hoperdnsaliasnettdc_484c2949b8623c0a91caf529c5a52f5cb9f27b59/media/ecc1cc8b.evm_tr2010-jul29.pdf
  - Election comminison throw him out from ECI tellig some legality (they should not have done it)
  - what he dis was he stole some M1 machine
  - they inserted new cards inside the EVM
  - they checnges the display aswell
  - also connected the bluetooth

**They can do all drama in outside, but no candidtae can show during the polls. Here are the reasons:**

- Physical access to the machines are impossible
- RF scan check will be perfored in the polling station such that no Bluetooth and WIfi are present near the vicinity

**Why EVMs ate not used in Germany anf Holland??**

- All voting machine has the same physical key
- this can be ordered from the internet at any time by anyone (under 2 Euro)
- the programmed the program on socketed chips and reprogrammable (EEPROM)
- The machine was actually running on a computer under an OS
- The machine has a maintanence mode which is protected by a pssword and the password is "GEHEIM" means SECRET
- All machines has the same password
- Votes are not encripted
- This was the great machine that was discontinued

**Why indian EVMs are so powerful**

- EVMS transfer through CU are encoded with encoding cable
- Each device has dfifference encoders
- Each Votes are encoded (Encoding Keys are different for every single votes)

Madras High Court: 2001
Karnataka Court: 2004

**Disadvantage of Ballot votes**
the story of not putting ballot on box

### Why VVPAT?

- VVPAT is a bad decisio
- You are using a less reliable mmaching to a high reliable machines
- VVPAt is a electro mechanical system
  - pages, printing error
  - what if the printor has error?

## M2

    CU<->VVPAT<->BU

- VVPAT printes with metal deposited on special paper
- No of VVPAT replacement is much larget than number of Ballot unit
- Sensor for contrast (green led)
- Sensor for slipping for (red laser)
- Sensore will sense before the paper get depleted
- Rural places, these VVPAT may not functional if there are direct sunlight

## M3

- less depedency of human first level check
- so first level check is done by the machine itselt
- It has PKI certificate exchange and challenge response
  - ability to dump the code to check that code cannnot be changed
  - has the ssame challenge response
  - 2 keys
    - Public key - known to everyone
    - Private key - nobody knows
    - financial transaction has 256 bit encription
    - EVM used 2kb encription (8 times higher)
    - so thae chance of decripting that key will take billion years
    - encode a message of private key with 2kb encription and give to any hacker
    - the public key can identifies that it has been originated from only you (this is like digital signature)
    - Each machine has private and public key which are manufactured by the manufacturer.
    - So dishonest machine or look alike machine does not have private machines
    - ME has a tough hardware, if you break that machine, a key will be activated, so that Pricate key will be destroyed
    - So no physical access to the indoor of the M3 machine
    -
- BEL and ECIL machine compatability

- Tested in Leh, Chirapunji, Trivandrum, Delhi, Jessel (becase laser intesity is a function of temperature)

Space diversity and Time diversity
Batteries can not be replaced

This works was recognised by President
