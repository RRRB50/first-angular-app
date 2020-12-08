export const GAMES: any =
[
    {
        id: 1,
        name: "Hollow Knight",
        category: "Indie",
        imgLink: "https://upload.wikimedia.org/wikipedia/en/c/c0/Hollow_Knight_cover.jpg",
        description: "Hollow Knight is a 2D Metroidvania action-adventure game, that takes place in Hallownest, a fictional ancient kingdom.[4] The player controls an insect-like, silent, and nameless knight while exploring the underground world. The knight wields a nail, which is a cone-shaped sword, used both in combat and environmental interaction.",
        steamLink: "https://store.steampowered.com/app/367520/Hollow_Knight/"
    },
    {
        id: 2,
        name: "Sekiro: Shadows Die Twice",
        category: "Action RPG",
        imgLink: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
        description: "Sekiro: Shadows Die Twice is an action-adventure game played from a third-person view.[1][2][3][4] Compared to FromSoftware's own Souls series, the game features fewer role-playing elements, lacking character creation and the ability to level up a variety of stats, as well as having no multiplayer elements.[3][4][5][6] It does, however, include gear upgrading, a skill tree, and limited ability customization. Rather than attacking to whittle an enemy's health points, combat in Sekiro revolves around using a katana to attack their posture and balance instead, which eventually leads to an opening that allows for a single killing blow.",
        steamLink: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/"
    },
    {
        id: 3,
        name: "Dark Souls 3",
        category: "Action RPG",
        imgLink: "https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg",
        description: "Dark Souls III is an action role-playing game played in a third-person perspective, similar to previous games in the series. According to lead director and series creator Hidetaka Miyazaki, the game's gameplay design followed 'closely from Dark Souls II'.[1] Players are equipped with a variety of weapons to fight against enemies, such as bows, throwable projectiles, and swords. Shields can act as secondary weapons but they are mainly used to deflect enemies' attacks and protect the player from suffering damage.[2] Each weapon has two basic types of attack, one being a standard attack, and the other being slightly more powerful that can be charged up, similar to FromSoftware's previous game, Bloodborne. In addition, attacks can be evaded through dodge-rolling.[3] Bonfires, which serve as checkpoints, return from previous installments.[4] Ashes, according to Miyazaki, play an important role in the game.[5] Magic is featured in the game, with a returning magic system from Demon's Souls, now known as 'focus points' (FP). When performing spells, the player's focus points are consumed. There are two separate types of Estus Flasks in the game, which can be allotted to fit a players' particular play style. One of them refills hit points like previous games in the series, while another refills focus points, a feature new to the game.[6] Combat and movements were made faster and more fluid than Dark Souls II;[7][8] as several player movements are performed more rapidly, allowing more damage to be done in a shorter period of time.",
        steamLink: "https://store.steampowered.com/app/374320/DARK_SOULS_III/"
    },
    {
        id: 4,
        name: "Celeste",
        category: "Platformer",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Celeste_box_art_final.png/330px-Celeste_box_art_final.png",
        description: "Celeste is a platform game in which players control a girl named Madeline as she makes her way up a mountain while avoiding various deadly obstacles. Along with jumping and climbing up walls for a limited amount of time, Madeline has the ability to perform a mid-air dash in the eight cardinal and intercardinal directions. This move can only be performed once and must be replenished by either landing on the ground, hitting certain objects such as replenishing crystals, or moving to a new screen (although the player is granted a second dash later on in the game). Combining dashes with movement in various ways can be used by the player to gain more speed than usual or access areas before they are supposed to. Some of these advanced movement mechanics are shown to the player as they progress the late stages of the game. Examples include the superdash, hyperdash, ultradash and an unintended feature, the demodash. Throughout each level, the player will encounter additional mechanics, such as springs that launch the player or feathers that allow brief flight, and deadly objects such as spikes which kill Madeline (returning her to the start of the room).",
        steamLink: "https://store.steampowered.com/app/504230/Celeste/"
    },
];

export function findGameById(gameId:string) {
  return GAMES.find((game: any) => game.id == gameId);
}
