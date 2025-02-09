# The Indian Electronic Voting Machine

<!-- **Chai and Why? The Indian Electronic Voting Machine - Dinesh Sharma 21/4/2019**

https://youtu.be/E0ORLvgM8ro?si=IosPPusFvnAtWc92

About the speaker: Dinesh Sharma is an Emeritus Fellow at the Dept. of Electrical Engineering, IIT Bombay, and a member of the Technical Experts Committee appointed by the Election Commission as an independent body to help in development and monitoring of electronic voting equipment and to advise it on technical matters. Among several other honours, he received a special felicitation by the president of India for his contributions as a member of the Technical Experts Committee of Election Commission in 2017. -->

The Electronic Voting Machine was proposed in 1977, and the Electronics Corporation of India (ECIL) was tasked with its development. In 1979, a working model was developed and showcased to various political parties on 6 August 1980. Bharat Electronics (BEL) and ECIL were tasked with manufacturing EVMs. The EVMs were first trialed in 1982 in the by-election to the Paravur assembly constituency in Kerala, in a limited number of polling stations.

The Technical Expert Committee (TEC) is completely an honorary body. They are strict with the Election Commission.

- Indian EVMs are different from all other EVMs in the world.
  - All other EVMs are produced by private companies.
  - Private companies do not follow the legislation.
  - Manufactured by BEL (Defense) and ECIL (BARC) with inbuilt infrastructure (strategic parts).
  - These companies have a strong source code audit process to ensure that rogue routines cannot be inserted into the software.
  - Source code is reviewed by a third-party independent review.
  - TEC not only reviews the code but also suggests additional safety measures.
- This EVM can be used only for voting (very dedicated).
- Fixed embedded system - only designed for voting (other devices are run on microcontrollers that can be programmed).
- BU does not have connectors (only wires come out of BU).
- All counting is done in the CU.
- VSDU is just a display for VVPAT.
- CU is controlled by the presiding officer.
- The program can be programmed only once.
- M1 (outdated), M2 (2006), and M3 (2015) EVMs are used, each with a lifetime of 15 years.
- Machine replacement (due to rust) does not mean EVM malfunction.
  - VVPAT was not there when M2 was designed.
- EVMs can talk to each other through encoded data sent over dedicated cables.
- There are no external connections to EVMs through wires or wireless.
- Not even power supply mains (zero connection to the outside world, i.e., completely isolated).
- Microcontrollers are one-time programmable.
  - If something happens to the machine, we need to dispose of it (no replaceable or programmable components).
- No Bluetooth.
- Even RF checks are performed in the vicinity of the EVMs.
- It is programmed inside BARC and reviewed by TEC over a period of 1 year.

## BU/CU has a challenge-response system

- Authenticator can be used to check if programs can be manipulated or not.
- Authenticator sends a challenge number and a random address to the machine.
- The machine takes 16 bytes from this address and the challenge number, computes this function, and returns that variable to the authenticator.
- The authenticator computes the same function with the good program and cross-verifies these numbers generated.
- This authenticator repeats this process many times and compares the values generated from the EVM with those from the authenticator.
- If the program is tampered with, the EVM has no clue what number will come and what function has to be generated.
- In M2, even the unused flash memory has a special pattern of numbers that only the authenticator can recognize.
- In M3, the authenticator can also ask the stack where even the subroutines are being called.

### During the polls

- In each minute, a maximum of 12 votes can be cast (minimum time interval is 12 seconds).
- This is the only EVM with design contributions from...
- First-level checks were conducted before the polls.
- Two types of randomization (district and which polling stations) - before nomination and after nomination.
- Mock polls are conducted before the actual polls.
- All EVMs are sealed with the most expensive paper from the Nasik currency press.
- This paper is used for covering the EVMs.
- These papers are sealed with the candidate's signature.
- All candidates put seals on the locks.
- District Magistrate + candidate.
- Physical access to the EVM is restricted.
- In mock polls, every button might be used.
- At the end of the polls, the officer presses the poll-closing button.
- Voting cannot be enabled after this until the results have been seen and vote counts have been cleared.
- The machine has a real-time clock that records the time of poll opening and poll closing.
- Every 2 hours, the presiding officer tallies the number of entries in the register with the number of votes registered in the EVMs.
- Not even one discrepancy of one vote has ever been reported till now (4 crores).

## Where can it go wrong?

- When the presiding officer forgets to remove the slips from VVPAT.
- Or when the Election Commission forgets to reset the CU before the polls start.
- Machines are destroyed.
- Even the fake videos spreading are from M1 that was stolen.
  - All demos were done by Hari Prasad.
  - Paper by Hari Prasad: [https://ecirtam.net/autoblogs/autoblogs/hoperdnsaliasnettdc_484c2949b8623c0a91caf529c5a52f5cb9f27b59/media/ecc1cc8b.evm_tr2010-jul29.pdf](https://ecirtam.net/autoblogs/autoblogs/hoperdnsaliasnettdc_484c2949b8623c0a91caf529c5a52f5cb9f27b59/media/ecc1cc8b.evm_tr2010-jul29.pdf)
  - The Election Commission threw him out from ECI citing some legality (they should not have done it).
  - What he did was steal some M1 machines.
  - They inserted new cards inside the EVM.
  - They changed the display as well.
  - Also connected Bluetooth.

**They can do all drama outside, but no candidate can show during the polls. Here are the reasons:**

- Physical access to the machines is impossible.
- RF scan checks will be performed in the polling station to ensure no Bluetooth or WiFi is present in the vicinity.

**Why EVMs are not used in Germany and Holland?**

- All voting machines have the same physical key.
- This can be ordered from the internet at any time by anyone (under 2 Euros).
- The program is on socketed chips and is reprogrammable (EEPROM).
- The machine was actually running on a computer under an OS.
- The machine has a maintenance mode protected by a password, and the password is "GEHEIM," which means "SECRET."
- All machines have the same password.
- Votes are not encrypted.
- This was the main reason the machine was discontinued.

**Why Indian EVMs are so powerful**

- EVMs transfer through CU are encoded with encoding cables.
- Each device has different encoders.
- Each vote is encoded (encoding keys are different for every single vote).

Madras High Court: 2001  
Karnataka Court: 2004  

**Disadvantage of Ballot Votes**  
The story of not putting the ballot in the box.

### Why VVPAT?

- VVPAT is a bad decision.
- You are using a less reliable machine with a highly reliable machine.
- VVPAT is an electro-mechanical system.
  - Pages, printing errors.
  - What if the printer has an error?

## M2

    CU <-> VVPAT <-> BU

- VVPAT prints with metal deposited on special paper.
- The number of VVPAT replacements is much larger than the number of Ballot Units.
- Sensor for contrast (green LED).
- Sensor for slipping (red laser).
- The sensor will sense before the paper gets depleted.
- In rural places, these VVPATs may not function if there is direct sunlight.

## M3

- Less dependency on human first-level checks.
- The first-level check is done by the machine itself.
- It has PKI certificate exchange and challenge-response.
  - Ability to dump the code to check that the code cannot be changed.
  - Has the same challenge-response.
  - Two keys:
    - Public key - known to everyone.
    - Private key - nobody knows.
    - Financial transactions use 256-bit encryption.
    - EVMs use 2kb encryption (8 times higher).
    - The chance of decrypting that key would take billions of years.
    - Encode a message with the private key using 2kb encryption and give it to any hacker.
    - The public key can identify that it originated only from you (this is like a digital signature).
    - Each machine has private and public keys, which are manufactured by the manufacturer.
    - Dishonest machines or look-alike machines do not have private keys.
    - M3 has tough hardware; if you break the machine, a key will be activated, and the private key will be destroyed.
    - No physical access to the interior of the M3 machine.
- BEL and ECIL machine compatibility.

- Tested in Leh, Chirapunji, Trivandrum, Delhi, and Jessel (because laser intensity is a function of temperature).

Space diversity and Time diversity.  
Batteries cannot be replaced.  

This work was recognized by the President.