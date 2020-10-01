# nitro-sniper  
# Features
- Removes non-alphanumeric chars automatically from codes and tries to redeem.
- Supports code obfuscation.
- Auto-detects fake codes by length or probability check.
# Disclaimer
The use of selfbots is against the [discord TOS](https://discord.com/terms) and [guidelines](https://discord.com/guidelines).  
Before proceeding, make sure you understand the implications and can accept the consequences.

# Installation methods
#### Heroku
- Login to heroku and click the button below.</br>
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/arnavpanigrahi/nitro-sniper/tree/master)
- Make sure you click "Manage App" -> Configure dynos/Resources and turn off `web` and start `worker`.<br>
- You can then see logs by clicking on `More` (top right) and then `View logs`.<br>
#### Local
- Make sure [Node](https://nodejs.org/en/) is installed on your system and open a command prompt/terminal.
- Run `git clone https://github.com/arnavpanigrahi/nitro-sniper`
- Run `cd nitro-sniper`
- Run `npm install`
- Edit the dotenv file and put your discord token.
- Run `node .`

# Tips
-  <a href="https://imgur.com/a/Rr8d5SQ">How to get discord token easily?</a> 
- Join a lot of servers(~100) to increase chances of sniping!
- Join servers with low latency i.e. in your region to increase chances of sniping/
- This is a selfbot and is against Discord terms of service, so don't mention that you implemented this anywhere.
- Running more than one instance or a combination of different snipers is risky.
- If you snipe a lot of nitro in a short amount of time, refrain from sniping for a while.
- Beware of the moral implications when you are using this. You might steal a gift that is meant for someone else and ruin their Christmas.

# License
[GPL-3.0-or-later](https://www.gnu.org/licenses/) 
