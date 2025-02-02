# userChromeJS

#### Tested on Firefox Developer Edition 66.0b8, Windows 10

## Instructions

1. Save [config.js](https://github.com/xiaoxiaoflood/firefox-scripts/raw/master/installation-folder/config.js) to Firefox installation folder (usually **C:\Program Files (x86)\Mozilla Firefox**), next to **firefox.exe**.

2. Save [config-prefs.js](https://raw.githubusercontent.com/xiaoxiaoflood/firefox-scripts/master/installation-folder/config-prefs.js) into **\defaults\pref** inside Firefox installation folder (usually **C:\Program Files (x86)\Mozilla Firefox\defaults\pref**), next to **channel-prefs.js**.

3. Click Firefox menu button (☰) -> *Help* -> *Troubleshooting information* (or simply open the address "*about:support*"), then click *Open folder*. This is the folder of your Firefox profile. In there, create a new folder called **chrome**.

4. Inside **chrome**, create another new folder called **utils**, then save all [these](https://github.com/xiaoxiaoflood/firefox-scripts/tree/master/chrome/utils) files into it.

5. Save the desired [userChromeJS scripts](https://github.com/xiaoxiaoflood/firefox-scripts/tree/master/chrome) into **chrome**. Read below the description of each one.

6. If you want a button to manage your userChromeJS scripts, save [rebuild_userChrome.uc.js](https://github.com/xiaoxiaoflood/firefox-scripts/raw/master/chrome/rebuild_userChrome.uc.js) into **chrome**.

7. Restart Firefox.

## userChromeJS scripts

(click on each to expand)
<details>
  <summary>Adjust URLBar Popup Position and Width</summary>
  In Fx 48, URLBar Popup was stretched to fill the entire width of the browser. This script restores the previous behavior, with the popup inheriting the width and position of URLBar.
  
  Note: there are similar userChrome.css alternatives, but the URLBar width can change depending on the buttons around and depending on the size of the window. You can't set dynamic width with pure CSS, so JS is needed.

  [Download link](https://github.com/xiaoxiaoflood/firefox-scripts/raw/master/chrome/adjustUrlbar.uc.js).  
  
  Firefox default:
  ![](https://i.imgur.com/R4xc6LB.png)
  
  With this script:
  ![](https://i.imgur.com/zgTwOL9.png)
</details>
<details>
  <summary>Master Password+</summary>
  Locks Firefox with password. It will prompt the password on browser startup or anytime when you lock it with Ctrl+Alt+Shift+W.
  
  You need to set a master password in <i>Firefox Options > Privacy & Security > [×] Use a master password</i>.

  [Download link](https://github.com/xiaoxiaoflood/firefox-scripts/raw/master/chrome/masterPasswordPlus.uc.js).  

  Locked:
  ![](https://i.imgur.com/cE3sUGT.png)

  Unlocked:
  ![](https://i.imgur.com/KOkEJq5.png)
</details>

## Screenshots

<img src="https://github.com/xiaoxiaoflood/firefox-scripts/raw/master/screenshots/folder.png">

###### userChromeJS Manager (the blue ones are restartless)
<img src="https://github.com/xiaoxiaoflood/firefox-scripts/raw/master/screenshots/rebuild_userChrome.png" height="600">

###### Status Bar, Extension Options Menu, MinMaxClose Button, newDownloadPlus.uc.js and legacy extensions:
<img  src="https://github.com/xiaoxiaoflood/firefox-scripts/raw/master/screenshots/window.png">
