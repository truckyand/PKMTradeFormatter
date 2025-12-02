var be = Object.defineProperty
  , Se = Object.defineProperties;
var Pe = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var Me = Object.prototype.hasOwnProperty
  , Be = Object.prototype.propertyIsEnumerable;
var F = (t, e, a) => e in t ? be(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : t[e] = a
  , c = (t, e) => {
    for (var a in e || (e = {}))
        Me.call(e, a) && F(t, a, e[a]);
    if (q)
        for (var a of q(e))
            Be.call(e, a) && F(t, a, e[a]);
    return t
}
  , f = (t, e) => Se(t, Pe(e));
var h = (t, e, a) => (F(t, typeof e != "symbol" ? e + "" : e, a),
a);
import {R as z, r as g, c as Ce, j as s, T as Ae, t as De, a as Ge, u as v, b as x, d as n, B as m, e as r, L, f as Le, m as _e, o as k, s as W, g as l, I as Te, h as J, A as He, i as K, k as C, S as E, l as xe, n as Ee, p as Ne, q as Re, C as Ie, v as $, w as _, F as N, x as T, y as Fe, D as Z, z as O, E as ze, G as j, H as X, J as Y, K as ee, M as se, N as y, O as u, P as H, Q as w, U as b, V as A, W as R, X as I, Y as We, Z as Oe, _ as te, $ as oe, a0 as Ve, a1 as Ue, a2 as Qe, a3 as qe, a4 as Je, a5 as Ke, a6 as $e, a7 as Ze, a8 as je, a9 as Xe, aa as Ye, ab as es, ac as ae} from "./vendor.11261cdc.js";
const ss = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        p(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const d of o.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && p(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
        i.crossorigin === "use-credentials" ? o.credentials = "include" : i.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function p(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = a(i);
        fetch(i.href, o)
    }
};
ss();
const ne = z.createContext({
    toggleColorMode: () => {}
})
  , ts = () => g.exports.useContext(ne)
  , os = ({children: t}) => {
    const e = window.localStorage.getItem("colorMode") || "dark"
      , [a,p] = g.exports.useState(e)
      , o = {
        toggleColorMode: () => {
            const B = a === "dark" ? "light" : "dark";
            p(B),
            window.localStorage.setItem("colorMode", B)
        }
    }
      , d = z.useMemo( () => Ce({
        palette: {
            primary: De,
            secondary: Ge,
            background: a === "light" ? {
                default: "#f0f0f0"
            } : {
                default: "#161616"
            },
            mode: a
        }
    }), [a]);
    return s(ne.Provider, {
        value: o,
        children: s(Ae, {
            theme: d,
            children: t
        })
    })
}
;
var as = "/assets/discord.dc65fffb.png"
  , ns = "/assets/twitch1.c7977239.png"
  , is = "/assets/twitch2.66dfd358.png";
const ie = ({stream: t}) => {
    const e = v()
      , a = x(e.breakpoints.up("md"));
    return n(m, {
        sx: {
            p: 8,
            textAlign: "center",
            borderTop: `1px solid ${e.palette.primary.main}44`,
            backgroundColor: `${e.palette.primary.main}22`,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap"
        },
        children: [n("div", {
            style: {
                maxWidth: 400
            },
            children: [n(r, {
                sx: {
                    mb: 1
                },
                children: ["Made with \u{1F496} by", " ", s(L, {
                    sx: {
                        textDecoration: "none",
                        ":hover": {
                            color: e.palette.text.secondary
                        }
                    },
                    href: "https://www.matthieu-locussol.com/",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: s("b", {
                        children: "Matthieu Locussol"
                    })
                }), s("br", {}), "Updated for PLA by", " ", s(L, {
                    sx: {
                        textDecoration: "none",
                        ":hover": {
                            color: e.palette.text.secondary
                        }
                    },
                    href: "https://www.patreon.com/shinyhub/",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: s("b", {
                        children: "ShinyHub Team"
                    })
                })]
            }), n(r, {
                sx: {
                    mb: 1
                },
                children: [s("br", {}), s("br", {}), "ShinyHub.TV 2021-2022", s("br", {}), "We are not affiliated in any way to Nintendo, Game Freak, the Pok\xE9mon Company, or to any other official representative for Pok\xE9mon."]
            })]
        }), t && s("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                maxWidth: a ? "none" : "500px",
                overflow: "hidden",
                marginLeft: 16
            },
            children: s(Le, {
                channel: "shinyhub",
                width: 700,
                height: 360,
                muted: !0,
                layout: a ? "video-with-chat" : "video"
            })
        })]
    })
}
;
var ps = "/assets/psyduck.5ccf4471.png";
const pe = () => n(m, {
    sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },
    children: [s("img", {
        style: {
            padding: 16,
            borderRadius: "48px"
        },
        src: ps,
        width: 138,
        height: 180
    }), s(r, {
        variant: "h3",
        children: "Oops! :("
    }), s(r, {
        variant: "h5",
        gutterBottom: !0,
        children: "An error has occurred, we're sorry!"
    }), s(r, {
        variant: "body1",
        maxWidth: "sm",
        gutterBottom: !0,
        children: "It seems like there is an issue with the website, we are working on it. You can try to refresh the page from time to time to check if the service is back up again."
    }), s(r, {
        variant: "body1",
        maxWidth: "sm",
        sx: {
            textAlign: "center",
            fontWeight: "bold"
        },
        children: "Thank you for your understanding \u{1F496}"
    })]
})
  , V  = ["Darkrai", "Uxie", "Mesprit", "Azelf", "Heatran", "Regigigas", "Cresselia", "Tornadus", "Thundurus", "Landorus", "Shaymin", "Dialga", "Dialga", "Palkia", "Palkia", "Giratina", "Arceus", "Phione", "Manaphy", "Enamorus"]
  , re = ["Darkrai", "Uxie", "Mesprit", "Azelf", "Heatran", "Regigigas", "Cresselia", "Tornadus", "Thundurus", "Landorus", "Shaymin", "Dialga", "Dialga", "Palkia", "Palkia", "Giratina", "Arceus", "Phione", "Manaphy", "Enamorus"]
  , le = ["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed", "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky"]
  , de = ["LAPoke Ball", "LAGreat Ball", "LAUltra Ball", "Feather Ball", "Wing Ball", "Jet Ball", "LAHeavy Ball", "Leaden Ball", "Gigaton Ball"]
  , rs = ["Japanese", "English", "French", "Italian", "German", "Spanish", "Korean", "Chinese"]
  , ls = ["Adamant Orb", "Amulet Coin", "Big Root", "Black Belt", "Black Glasses", "Black Sludge", "Blue Scarf", "Bright Powder", "Charcoal", "Choice Band", "Choice Scarf", "Choice Specs", "Cleanse Tag", "Damp Rock", "Destiny Knot", "Draco Plate", "Dragon Fang", "Dread Plate", "Earth Plate", "Everstone", "Expert Belt", "Fist Plate", "Flame Orb", "Flame Plate", "Focus Band", "Focus Sash", "Full Incense", "Green Scarf", "Grip Claw", "Griseous Orb", "Hard Stone", "Heat Rock", "Icicle Plate", "Icy Rock", "Insect Plate", "Iron Ball", "Iron Plate", "Lagging Tail", "Lax Incense", "Leftovers", "Life Orb", "Light Ball", "Light Clay", "Luck Incense", "Lucky Egg", "Lucky Punch", "Lustrous Orb", "Macho Brace", "Magnet", "Meadow Plate", "Mental Herb", "Metal Powder", "Metronome", "Mind Plate", "Miracle Seed", "Muscle Band", "Mystic Water", "Never-Melt Ice", "Odd Incense", "Pink Scarf", "Poison Barb", "Power Anklet", "Power Band", "Power Belt", "Power Bracer", "Power Herb", "Power Lens", "Power Weight", "Pure Incense", "Quick Claw", "Quick Powder", "Red Scarf", "Rock Incense", "Rose Incense", "Scope Lens", "Sea Incense", "Sharp Beak", "Shed Shell", "Shell Bell", "Silk Scarf", "Silver Powder", "Sky Plate", "Smoke Ball", "Smooth Rock", "Soft Sand", "Soothe Bell", "Soul Dew", "Spell Tag", "Splash Plate", "Spooky Plate", "Sticky Barb", "Stone Plate", "Thick Club", "Toxic Orb", "Toxic Plate", "Twisted Spoon", "Wave Incense", "White Herb", "Wide Lens", "Wise Glasses", "Yellow Scarf", "Zap Plate", "Zoom Lens", "Dawn Stone", "Deep Sea Scale", "Deep Sea Tooth", "Dragon Scale", "Dubious Disc", "Dusk Stone", "Electirizer", "Fire Stone", "King's Rock", "Leaf Stone", "Magmarizer", "Metal Coat", "Moon Stone", "Oval Stone", "Protector", "Razor Claw", "Razor Fang", "Reaper Cloth", "Shiny Stone", "Sun Stone", "Thunder Stone", "Upgrade", "Water Stone", ...de, "Antidote", "Awakening", "Burn Heal", "Elixir", "Energy Powder", "Energy Root", "Ether", "Fresh Water", "Full Heal", "Full Restore", "Heal Powder", "Hyper Potion", "Ice Heal", "Lava Cookie", "Lemonade", "Max Elixir", "Max Ether", "Max Potion", "Max Revive", "Moomoo Milk", "Old Gateau", "Paralyze Heal", "Potion", "Revival Herb", "Revive", "Soda Pop", "Super Potion", ...[...new Array(100)].map( (t, e) => `TM${e + 1 < 10 ? `0${e + 1}` : e + 1}`), "Calcium", "Carbos", "HP Up", "Iron", "PP Max", "PP Up", "Protein", "Rare Candy", "Zinc", "Armor Fossil", "Skull Fossil", "Claw Fossil", "Dome Fossil", "Helix Fossil", "Old Amber", "Root Fossil", "Ability Capsule", "Ability Patch", "Bottle Cap", "Dire Hit", "Guard Spec.", "X Accuracy", "X Attack", "X Defense", "X Sp. Atk", "X Sp. Def", "X Speed", "Big Mushroom", "Big Pearl", "Blue Shard", "Green Shard", "Heart Scale", "Honey", "Nugget", "Pearl", "Rare Bone", "Red Shard", "Star Piece", "Stardust", "Tiny Mushroom", "Yellow Shard", "Gold Bottle Cap", "Grepa Berry", "Hondew Berry", "Kelpsy Berry", "Pomeg Berry", "Qualot Berry", "Tamato Berry", "Aguav Berry", "Enigma Berry", "Figy Berry", "Iapapa Berry", "Leppa Berry", "Mago Berry", "Oran Berry", "Sitrus Berry", "Wiki Berry", "Aspear Berry", "Cheri Berry", "Chesto Berry", "Lum Berry", "Pecha Berry", "Persim Berry", "Rawst Berry", "Apicot Berry", "Custap Berry", "Ganlon Berry", "Lansat Berry", "Liechi Berry", "Micle Berry", "Petaya Berry", "Salac Berry", "Starf Berry", "Babiri Berry", "Charti Berry", "Chilan Berry", "Chople Berry", "Coba Berry", "Colbur Berry", "Haban Berry", "Jaboca Berry", "Kasib Berry", "Kebia Berry", "Occa Berry", "Passho Berry", "Payapa Berry", "Rindo Berry", "Roseli Berry", "Rowap Berry", "Shuca Berry", "Tanga Berry", "Wacan Berry", "Yache Berry", "Belue Berry", "Bluk Berry", "Cornn Berry", "Durin Berry", "Magost Berry", "Nanab Berry", "Nomel Berry", "Pamtre Berry", "Pinap Berry", "Rabuta Berry", "Razz Berry", "Spelon Berry", "Watmel Berry", "Wepear Berry", ...le.map(t => `${t} Mint`), "Leek", "Pixie Plate", "Berry Juice", "Escape Rope", "Max Repel", "Repel", "Super Repel", "Odd Keystone", "Poke Doll"]
  , he = [{
    text: "SV",
    url: "https://sv.shinyhub.tv/"
}, {
    text: "PLA",
    url: "https://pla.shinyhub.tv/"
}, {
    text: "BDSP",
    url: "https://bdsp.shinyhub.tv/"
}, {
    text: "SWSH",
    url: "https://swsh.shinyhub.tv/"
}]
  , ds = t => t === "" ? "" : `${t[0].toLocaleUpperCase()}${t.slice(1)}`
  , me = t => t.replace(/-/gi, " ").split(" ").map(a => ds(a)).join(" ")
  , U = t => ({
    hp: "HP",
    atk: "Atk",
    spa: "SpA",
    def: "Def",
    spd: "SpD",
    spe: "Spe"
})[t] || t
  , D = t => {
    const e = parseInt(t, 10);
    return Number.isNaN(e) || e < 0 ? 0 : e > 255 ? 255 : e
}
  , G = t => {
    const e = parseInt(t, 10);
    return Number.isNaN(e) || e < 0 ? 0 : e > 31 ? 31 : e
}
  , hs = t => {
    const e = parseInt(t, 10);
    return Number.isNaN(e) || e < 0 ? 0 : e > 100 ? 100 : e
}
  , ms = t => ["arceus", "azelf", "bronzong", "bronzor", "darkrai", "dialga", "electrode-hisui", "giratina", "magnemite", "magneton", "magnezone", "manaphy", "mesprit", "palkia", "phione", "porygon", "porygon2", "porygon-z", "regigigas", "rotom", "shaymin", "unown", "uxie", "voltorb-hisui", "giratina-origin"].includes(t.toLocaleLowerCase());
class ys {
    constructor() {
        h(this, "search", "");
        h(this, "selectedPokemon", "");
        h(this, "selectedPokemonId", -1);
        h(this, "selectedStrategy");
        h(this, "ability", "");
        h(this, "nature", "");
        h(this, "evs", {
            hp: 0,
            spe: 0,
            def: 0,
            spd: 0,
            atk: 0,
            spa: 0
        });
        h(this, "ivs", {
            hp: 31,
            spe: 31,
            def: 31,
            spd: 31,
            atk: 31,
            spa: 31
        });
        h(this, "ot", {
            name: window.localStorage.getItem("name") || "",
            tid: window.localStorage.getItem("tid") || "",
            sid: window.localStorage.getItem("sid") || "",
            language: window.localStorage.getItem("language") || "English",
            ball: window.localStorage.getItem("ball") || "Poke Ball",
            male: window.localStorage.getItem("male") !== "false"
        });
        h(this, "level", window.localStorage.getItem("level") || "100");
        h(this, "moves", {
            one: "",
            two: "",
            three: "",
            four: ""
        });
        h(this, "item", "");
        h(this, "shiny", window.localStorage.getItem("shiny") !== "false");
        h(this, "alpha", window.localStorage.getItem("alpha") !== "false");
        h(this, "copied", !1);
        h(this, "help", !1);
        h(this, "nickname", "");
        h(this, "malePokemon", window.localStorage.getItem("malePokemon") !== "false");
        h(this, "takeOwn", window.localStorage.getItem("takeOwn") === "true");
        h(this, "advanced", !1);
        h(this, "onlyLegendaries", !1);
        h(this, "useDP", !1);
        h(this, "selectedUnown", "");
        h(this, "error", "");
        h(this, "online", null);
        h(this, "game", {
            text: "PLA",
            url: "https://shinyhub.tv"
        });
        _e(this)
    }
    setSearch(e) {
        this.search = e
    }
    setGame(e) {
        this.game = e
    }
    setSelectedPokemon(e, a) {
        this.selectedPokemon = e,
        this.selectedPokemonId = a,
        this.selectedPokemon === "Unown" ? this.setSelectedUnown("Unown-A") : this.setSelectedUnown(""),
        this.setSelectedStrategy(void 0)
    }
    setSelectedStrategy(e) {
        this.selectedStrategy = e,
        e === void 0 ? (this.setAbility(""),
        this.setNature(""),
        this.evs.hp = 0,
        this.evs.spe = 0,
        this.evs.atk = 0,
        this.evs.spa = 0,
        this.evs.def = 0,
        this.evs.spd = 0,
        this.selectedPokemon === "Giratina-Origin" ? this.setItem("Griseous Orb") : this.setItem(""),
        this.setMove1(""),
        this.setMove2(""),
        this.setMove3(""),
        this.setMove4("")) : (this.setHP(String(e.evs.hp)),
        this.setSpe(String(e.evs.spe)),
        this.setDef(String(e.evs.def)),
        this.setSpD(String(e.evs.spd)),
        this.setAtk(String(e.evs.atk)),
        this.setSpA(String(e.evs.spa)),
        Array.isArray(e.ability) ? this.setAbility(e.ability[0].split(",")[0]) : e.ability !== void 0 ? this.setAbility(e.ability.split(",")[0]) : this.setAbility(""),
        Array.isArray(e.nature) ? this.setNature(e.nature[0].split(",")[0]) : this.setNature(e.nature.split(",")[0]),
        Array.isArray(e.item) ? this.setItem(e.item[0]) : this.setItem(e.item),
        Array.isArray(e.moves[0]) ? this.setMove1(e.moves[0][0]) : this.setMove1(e.moves[0] || ""),
        Array.isArray(e.moves[1]) ? this.setMove2(e.moves[1][0]) : this.setMove2(e.moves[1] || ""),
        Array.isArray(e.moves[2]) ? this.setMove3(e.moves[2][0]) : this.setMove3(e.moves[2] || ""),
        Array.isArray(e.moves[3]) ? this.setMove4(e.moves[3][0]) : this.setMove4(e.moves[3] || "")),
        this.setNickname("")
    }
    setAbility(e) {
        this.ability = e
    }
    setNature(e) {
        this.nature = e
    }
    setHP(e) {
        this.evs.hp = D(e)
    }
    setSpe(e) {
        this.evs.spe = D(e)
    }
    setDef(e) {
        this.evs.def = D(e)
    }
    setSpD(e) {
        this.evs.spd = D(e)
    }
    setAtk(e) {
        this.evs.atk = D(e)
    }
    setSpA(e) {
        this.evs.spa = D(e)
    }
    setHPIV(e) {
        this.ivs.hp = G(e)
    }
    setSpeIV(e) {
        this.ivs.spe = G(e)
    }
    setDefIV(e) {
        this.ivs.def = G(e)
    }
    setSpDIV(e) {
        this.ivs.spd = G(e)
    }
    setAtkIV(e) {
        this.ivs.atk = G(e)
    }
    setSpAIV(e) {
        this.ivs.spa = G(e)
    }
    setOTName(e) {
        this.ot.name = e,
        window.localStorage.setItem("name", e)
    }
    setTID(e) {
        this.ot.tid = e,
        window.localStorage.setItem("tid", e)
    }
    setSID(e) {
        this.ot.sid = e,
        window.localStorage.setItem("sid", e)
    }
    setLanguage(e) {
        this.ot.language = e,
        window.localStorage.setItem("language", e)
    }
    setBall(e) {
        this.ot.ball = e,
        window.localStorage.setItem("ball", e)
    }
    setGender(e) {
        this.ot.male = e,
        window.localStorage.setItem("male", String(e))
    }
    setLevel(e) {
        this.level = String(hs(e)),
        window.localStorage.setItem("level", e)
    }
    setMove1(e) {
        this.moves.one = e
    }
    setMove2(e) {
        this.moves.two = e
    }
    setMove3(e) {
        this.moves.three = e
    }
    setMove4(e) {
        this.moves.four = e
    }
    setItem(e) {
        this.item = e
    }
    setShiny(e) {
        this.shiny = e,
        window.localStorage.setItem("shiny", String(e))
    }
    setAlpha(e) {
        this.alpha = e,
        window.localStorage.setItem("alpha", String(e))
    }
    get fragments() {
        const e = [];
        return e.push(`${this.selectedUnown !== "" ? this.selectedUnown : this.selectedPokemon}${this.nickname !== "" ? ` (${this.nickname})` : ""}${ms(this.selectedPokemon) ? "" : this.malePokemon ? " (M)" : " (F)"}${this.item !== "" ? ` @ ${this.item}` : ""}`),
        this.shiny && !V.includes(this.selectedPokemon) && e.push("Shiny: Yes"),
        this.alpha && !re.includes(this.selectedPokemon) && e.push("Alpha: Yes"),
        this.level !== "" && this.level !== "100" && e.push(`Level: ${this.level}`),
        this.advanced && this.ot.name !== "" && e.push(`OT: ${this.ot.name}`),
        this.advanced && this.ot.name !== "" && (this.advanced && this.ot.male ? e.push("OTGender: Male") : e.push("OTGender: Female")),
        this.advanced && this.ot.tid !== "" && e.push(`TID: ${this.ot.tid}`),
        this.advanced && this.ot.sid !== "" && e.push(`SID: ${this.ot.sid}`),
        this.ot.ball !== "" && this.ot.ball !== "Poke Ball" && e.push(`Ball: ${this.ot.ball}`),
        this.ot.language !== "" && e.push(`Language: ${this.ot.language}`),
        this.ability !== "" && e.push(`Ability: ${this.ability}`),
        e.push(`IVs: ${Object.entries(this.ivs).filter( ([,a]) => a > 0).map( ([a,p]) => `${p} ${U(a)}`).join(" / ")}`),
        (this.evs.hp || this.evs.spe || this.evs.atk || this.evs.spa || this.evs.def || this.evs.spd) && e.push(`EVs: ${Object.entries(this.evs).filter( ([,a]) => a > 0).map( ([a,p]) => `${p} ${U(a)}`).join(" / ")}`),
        this.nature !== "" && e.push(`${this.nature} Nature`),
        this.moves.one !== "" && e.push(`- ${this.moves.one}`),
        this.moves.two !== "" && e.push(`- ${this.moves.two}`),
        this.moves.three !== "" && e.push(`- ${this.moves.three}`),
        this.moves.four !== "" && e.push(`- ${this.moves.four}`),
        e
    }
    get formattedMessage() {
        return ["$trade", ...this.fragments].join(" ")
    }
    get formattedMessageDiscord() {
        return [`$trade ${this.fragments[0]}`, ...this.fragments.slice(1)].join(`
`)
    }
    setCopied(e) {
        this.copied = e
    }
    setHelp(e) {
        this.help = e
    }
    setNickname(e) {
        this.nickname = e
    }
    setMalePokemon(e) {
        this.malePokemon = e,
        window.localStorage.setItem("malePokemon", String(e))
    }
    setTakeOwn(e) {
        this.takeOwn = e,
        window.localStorage.setItem("takeOwn", String(e))
    }
    setAdvanced(e) {
        this.advanced = e
    }
    setOnlyLegendaries(e) {
        this.onlyLegendaries = e
    }
    setUseDP(e) {
        this.useDP = e,
        this.setSelectedPokemon("", -1)
    }
    setSelectedUnown(e) {
        this.selectedUnown = e
    }
    setError(e) {
        this.error = e
    }
    setOnline(e) {
        this.online = e
    }
}
const ye = new ys
  , ue = g.exports.createContext({
    store: ye
})
  , us = k( ({children: t}) => s(ue.Provider, {
    value: {
        store: ye
    },
    children: t
}))
  , P = () => {
    const t = g.exports.useContext(ue);
    if (!t.store)
        throw new Error("useStore must be used within a StoreProvider.");
    return t.store
}
  , cs = W("div")( ({theme: t}) => ({
    position: "relative",
    borderRadius: t.shape.borderRadius,
    backgroundColor: l(t.palette.common.white, .15),
    "&:hover": {
        backgroundColor: l(t.palette.common.white, .25)
    },
    marginLeft: 0,
    width: "100%",
    [t.breakpoints.up("sm")]: {
        marginLeft: t.spacing(1),
        width: "auto"
    }
}))
  , gs = W("div")( ({theme: t}) => ({
    padding: t.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}))
  , fs = W(Te)( ({theme: t}) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: t.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${t.spacing(4)})`,
        transition: t.transitions.create("width"),
        width: "100%",
        [t.breakpoints.up("sm")]: {
            width: "32ch",
            "&:focus": {
                width: "40ch"
            }
        }
    }
}))
  , ce = k( () => {
    const t = v()
      , {toggleColorMode: e} = ts()
      , a = P()
      , p = J();
    return s(m, {
        sx: {
            flexGrow: 1,
            mb: 8
        },
        children: s(He, {
            position: "fixed",
            children: n(K, {
                children: [s(m, {
                    component: "div",
                    sx: {
                        flexGrow: 1,
                        alignItems: "center",
                        display: {
                            xs: "none",
                            sm: "flex"
                        }
                    },
                    children: s(r, {
                        variant: "h5",
                        noWrap: !0,
                        children: "ShinyHub.TV"
                    })
                }), s(C, {
                    onClick: () => open("https://www.patreon.com/shinyhub"),
                    color: "inherit",
                    sx: {
                        ml: .6
                    },
                    children: s(E, {
                        children: n("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "64",
                            height: "64",
                            "font-size": "1.5rem",
                            fill: "currentColor",
                            viewBox: "0 0 95 95",
                            preserveAspectRatio: "xMidYMid meet",
                            children: [s("path", {
                                d: "M206 0c11.1 2 22.4 3.3 33.3 6 75.2 18.6 132.2 82.4 142.8 159.4 14.1 102.4-52.5 196-154 216.3-7.3 1.5-14.8 2.3-22.2 3.4h-102l.1-193.4c0-4.3.4-8.7 1.1-12.9 6.6-43.3 46.1-76 89.4-74.3 45.7 1.9 82.4 37.2 85.3 82.2 4.3 66.8-63.7 113.7-124.6 85.9-1.3-.6-2.6-1.1-4.5-1.8l.2 60.1c0 1.2 2.3 3 3.8 3.4 19.5 5.6 39.4 6.7 59.4 3.5 84.6-13.6 139.2-93.9 120.9-177.3-16.9-77.2-94.1-127.7-171-112-69.6 14-118.2 73.4-118.4 144.6V380c0 1.7.2 3.3.4 5H0V178l1.8-11.8C12.4 88.5 69.1 24.9 145.2 5.9 156 3.2 167.1 1.9 178 0h28z",
                                fill: "#e6461a"
                            }), s("path", {
                                d: "M1680 272h-31.7v-22.9l-.3-88.5c-.3-23.1-17.7-43.9-40.3-48.6-31-6.5-62.5 18.6-62.6 50.4l.2 109.7h-30.8V88.9h30.5V99c10-8.9 20.6-14.4 32.6-17.4 47.2-11.9 96.6 22.8 101.4 71.2.1 1.4.6 2.9.9 4.3l.1 114.9zM481.8 251.5v91.4h-30.6l-.3-3.9.1-159.5c.3-48.1 34-88.7 81-98.2 56.5-11.4 111.8 28.3 119.2 85.5 7.3 56.4-31.5 107-88.1 113.8-29.7 3.5-55.3-6.7-77.3-26.5-1-.9-1.5-2.5-2.3-3.8-.6.4-1.1.8-1.7 1.2zm69.9-1.1c38.7-.1 69.6-31.3 69.6-70.1-.1-38.7-31.4-70-69.9-69.8-38.6.2-69.6 31.4-69.5 70.2-.1 38.6 31.1 69.8 69.8 69.7zm576-29.1c14.8 22.6 46.1 33.8 73.8 26.4 16.9-4.5 30.4-14.2 40.1-28.7s13.3-30.7 11.2-48.4h30.6c5.5 38.7-17.6 89.2-69.4 105.7-49 15.6-101.9-8.4-122.6-55.5-20.8-47.3-2.5-102.8 42.6-128.5 46.7-26.6 99-9.2 123.4 19.9l-129.7 109.1zm-13-29.5l91.8-77.2c-23.3-9.7-53-3.2-71.9 15.7-16.6 16.7-22.9 37-19.9 61.5zM864 272.1h-30.9v-18.9l-3.3 2.7c-57.3 49.6-145.6 22-164.2-51.3C648.5 137 704.1 72.7 773.4 79.7c51 5.2 90 47.7 90.5 98.9l.1 93.5zM693.5 180c-.1 38.4 31 69.9 69.2 70.1 38.6.1 70.3-30.8 70.4-68.8.1-39.7-30.7-71.1-69.6-71.1-38.6-.2-69.9 31.1-70 69.8zm601.8 0c.1-55.6 45.3-100.8 100.7-100.8 55.6 0 101 45.7 100.7 101.3-.3 55.7-45.4 100.6-101 100.5-55.4-.1-100.5-45.4-100.4-101zm100.6 70c38.6 0 70-31.2 70-69.8.1-38.5-31.3-70.1-69.7-70.2-38.5-.1-70 31.3-70.1 69.8 0 38.7 31.3 70.2 69.8 70.2zM873.8 88.3h17.7V17.5h31v70.8h46.2v30.9h-46.1V272h-30.8v-6l.1-141c0-4.5-1.1-6.3-5.8-5.8-3.9.4-7.9.1-12.2.1l-.1-31zm141.7 26.8c14.7-13.2 31.5-22.3 50.9-25.7 6.8-1.2 13.8-1.3 21.2-2v28.4c0 3.5-2.6 2.9-4.6 2.9-15.4.2-29.2 5.1-41.1 14.6-17.3 13.7-26.7 31.7-27 53.9l-.1 84.8h-30.5V88.7h29.9v25.8c.5.2.9.4 1.3.6z",
                                fill: "#222c31"
                            }), s("path", {
                                d: "M17.164 0l2.767.5c6.25 1.546 10.985 6.847 11.866 13.245C32.97 22.253 27.435 30.03 19 31.717c-.607.125-1.23.19-1.845.283H8.68l.008-16.07c0-.357.033-.723.09-1.072.548-3.598 3.83-6.315 7.43-6.174 3.797.158 6.847 3.09 7.088 6.83.357 5.55-5.293 9.448-10.354 7.138-.108-.05-.216-.09-.374-.15l.017 4.994c0 .1.19.25.316.283 1.62.465 3.274.557 4.936.29 7.03-1.13 11.567-7.803 10.046-14.733-1.404-6.415-7.82-10.61-14.21-9.307-5.783 1.163-9.822 6.1-9.838 12.016v15.53c0 .14.017.274.033.415H.047v-17.2l.15-.98C1.077 7.354 5.788 2.07 12.112.5c.897-.224 1.82-.332 2.726-.5h2.327z"
                            })]
                        })
                    })
                }), s(C, {
                    onClick: () => open("https://www.twitch.tv/ShinyHub"),
                    color: "inherit",
                    sx: {
                        ml: .6
                    },
                    children: s(E, {
                        children: n("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            "font-size": "1.5rem",
                            fill: "currentColor",
                            viewBox: "0 0 18 18",
                            preserveAspectRatio: "xMidYMid meet",
                            children: [s("path", {
                                d: "M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"
                            }), s("path", {
                                d: "M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"
                            })]
                        })
                    })
                }), s(C, {
                    onClick: () => open("https://discord.gg/invite/jKMJC3pdf8"),
                    color: "inherit",
                    sx: {
                        ml: .6
                    },
                    children: s(E, {
                        children: s("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            "font-size": "1.5rem",
                            fill: "currentColor",
                            viewBox: "0 0 18 18",
                            preserveAspectRatio: "xMidYMid meet",
                            children: s("path", {
                                d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                            })
                        })
                    })
                }), s(C, {
                    onClick: () => p("/guide"),
                    color: "inherit",
                    sx: {
                        ml: .6
                    },
                    children: s(E, {
                        children: s("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            "font-size": "1.5rem",
                            fill: "currentColor",
                            viewBox: "0 0 18 18",
                            preserveAspectRatio: "xMidYMid meet",
                            children: s("path", {
                                d: "M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                            })
                        })
                    })
                }), s(C, {
                    onClick: () => a.setAdvanced(!a.advanced),
                    color: a.advanced ? "secondary" : "inherit",
                    children: s(xe, {})
                }), s(C, {
                    sx: {
                        ml: 0
                    },
                    onClick: e,
                    color: "inherit",
                    children: t.palette.mode === "dark" ? s(Ee, {}) : s(Ne, {})
                }), n(cs, {
                    children: [s(gs, {
                        children: s(Re, {})
                    }), s(fs, {
                        value: a.search,
                        onChange: i => a.setSearch(i.target.value),
                        placeholder: "Search\u2026",
                        inputProps: {
                            "aria-label": "search"
                        }
                    })]
                })]
            })
        })
    })
}
)
  , ge = () => s(m, {
    sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },
    children: s(Ie, {
        variant: "indeterminate",
        size: 128
    })
})
  , fe = "https://fcbdkzwh87.execute-api.eu-west-3.amazonaws.com/api/staging/books"
  , vs = k( () => {
    const t = P()
      , e = v()
      , a = x(e.breakpoints.up("md"))
      , p = J();
    t.setOnline(!0),
    g.exports.useEffect( () => {
        (async () => {
            (await $.post(fe, {
                type: "isPokemineRunning"
            })).data.body === "Yes" ? t.setOnline(!0) : t.setOnline(!1)
        }
        )(),
        _.send({
            hitType: "pageview",
            page: "/guide"
        })
    }
    , []);
    const i = ({children: o}) => s(O, {
        sx: {
            p: 2,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            mr: a ? 2 : 0,
            mt: a ? 0 : 2
        },
        children: o
    });
    return t.online === null ? s(ge, {}) : t.online ? n(N, {
        children: [s(ce, {}), n(m, {
            sx: {
                display: "flex",
                flexDirection: "column",
                p: 4
            },
            children: [s(T, {
                sx: {
                    mr: "auto",
                    mb: 2
                },
                variant: "contained",
                onClick: () => p("/"),
                startIcon: s(Fe, {}),
                children: "Go back to homepage"
            }), s(r, {
                variant: "h4",
                gutterBottom: !0,
                children: "How to request a trade?"
            }), n(m, {
                sx: {
                    display: "flex",
                    width: "100%",
                    flexDirection: a ? "row" : "column"
                },
                children: [n(m, {
                    component: i,
                    children: [s(r, {
                        variant: "h5",
                        gutterBottom: !0,
                        children: "On Twitch"
                    }), n(r, {
                        gutterBottom: !0,
                        children: [s("b", {
                            children: "1."
                        }), " Go to", " ", s(L, {
                            href: "https://www.twitch.tv/shinyhub",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "www.twitch.tv/shinyhub"
                        })]
                    }), n(r, {
                        gutterBottom: !0,
                        children: [s("b", {
                            children: "2."
                        }), " In the chat, you can type :", n("pre", {
                            children: ["$trade ", "<POKEMON>"]
                        }), " You can customize it further more if you would like. Use the format that is found in our website", " ", s(L, {
                            href: "https://www.shinyhub.tv",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "www.shinyhub.tv"
                        }), ".", s("br", {}), "You can click on any pokemon, click on any moveset that is available.", s("br", {}), "Delete any illegal moveset with red error and you are ready to go."]
                    }), n(r, {
                        gutterBottom: !0,
                        children: [s("b", {
                            children: "3."
                        }), ' Click on "Copy for twitch". After that paste it in the chat.']
                    }), s(Z, {
                        sx: {
                            mt: 1,
                            mb: 2
                        }
                    }), n(r, {
                        children: ["Once you send that $trade request, you will be in a waiting list.", s("br", {}), " To be in the QUEUE (after waiting list), you have to whisper the code you will be using for the trade.", s("br", {}), s("br", {}), " To set the code, WHISPER - ShinyHubRobot your code on twitch.", s("br", {}), " To do that, click on the name and click Whisper.", s("br", {}), " The code should be 8 digit."]
                    }), s("img", {
                        style: {
                            padding: 16,
                            borderRadius: "48px"
                        },
                        src: ns
                    }), s("img", {
                        style: {
                            padding: 16,
                            borderRadius: "48px"
                        },
                        src: is
                    })]
                }), n(m, {
                    component: i,
                    children: [s(r, {
                        variant: "h5",
                        gutterBottom: !0,
                        children: "On Discord"
                    }), n(r, {
                        style: {
                            fontStyle: "italic"
                        },
                        gutterBottom: !0,
                        children: ["The instruction is pretty much the same, but the format will be different.", s("br", {}), s("b", {
                            children: "If you use discord, you are able to upload pb8 files as well."
                        })]
                    }), s(Z, {
                        sx: {
                            mt: 1,
                            mb: 2
                        }
                    }), n(r, {
                        gutterBottom: !0,
                        children: [s("b", {
                            children: "1."
                        }), " Join discord:", " ", s(L, {
                            href: "https://discord.gg/invite/jKMJC3pdf8",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "https://discord.gg/invite/jKMJC3pdf8"
                        })]
                    }), n(r, {
                        gutterBottom: !0,
                        children: [s("b", {
                            children: "2."
                        }), " Use the channel trades"]
                    }), s("img", {
                        style: {
                            padding: 16,
                            borderRadius: "48px"
                        },
                        src: as
                    }), n(r, {
                        gutterBottom: !0,
                        children: [s("b", {
                            children: "3."
                        }), ' Use the "Copy to discord format" from the website.']
                    })]
                })]
            })]
        }), s(ie, {
            stream: !1
        })]
    }) : s(pe, {})
}
)
  , M = {
    Rowlet: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/rowlet.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/rowlet.png"
        },
        name: "rowlet",
        id: 1,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Dartrix: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/dartrix.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/dartrix.png"
        },
        name: "dartrix",
        id: 2,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    "Decidueye-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/decidueye-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/decidueye-hisui.png"
        },
        name: "decidueye-hisui",
        id: 3,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    Cyndaquil: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/cyndaquil.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/cyndaquil.png"
        },
        name: "cyndaquil",
        id: 4,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Quilava: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/quilava.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/quilava.png"
        },
        name: "quilava",
        id: 5,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    "Typhlosion-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/typhlosion-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/typhlosion-hisui.png"
        },
        name: "typhlosion-hisui",
        id: 6,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }, {
            slot: 2,
            type: {
                name: "ghost"
            }
        }]
    },
    Oshawott: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/oshawott.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/oshawott.png"
        },
        name: "oshawott",
        id: 7,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Dewott: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/dewott.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/dewott.png"
        },
        name: "dewott",
        id: 8,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    "Samurott-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/samurott-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/samurott-hisui.png"
        },
        name: "samurott-hisui",
        id: 9,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "dark"
            }
        }]
    },
    Bidoof: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/bidoof.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/bidoof.png"
        },
        name: "bidoof",
        id: 10,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Bibarel: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/bibarel.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/bibarel.png"
        },
        name: "bibarel",
        id: 11,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "water"
            }
        }]
    },
    Starly: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/starly.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/starly.png"
        },
        name: "starly",
        id: 12,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Staravia: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/staravia.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/staravia.png"
        },
        name: "staravia",
        id: 13,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Staraptor: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/staraptor.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/staraptor.png"
        },
        name: "staraptor",
        id: 14,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Shinx: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/shinx.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/shinx.png"
        },
        name: "shinx",
        id: 15,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Luxio: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/luxio.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/luxio.png"
        },
        name: "luxio",
        id: 16,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Luxray: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/luxray.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/luxray.png"
        },
        name: "luxray",
        id: 17,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Wurmple: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/wurmple.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/wurmple.png"
        },
        name: "wurmple",
        id: 18,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }]
    },
    Silcoon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/silcoon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/silcoon.png"
        },
        name: "silcoon",
        id: 19,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }]
    },
    Beautifly: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/beautifly.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/beautifly.png"
        },
        name: "beautifly",
        id: 20,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Cascoon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/cascoon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/cascoon.png"
        },
        name: "cascoon",
        id: 21,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }]
    },
    Dustox: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/dustox.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/dustox.png"
        },
        name: "dustox",
        id: 22,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Ponyta: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/ponyta.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/ponyta.png"
        },
        name: "ponyta",
        id: 23,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Rapidash: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/rapidash.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/rapidash.png"
        },
        name: "rapidash",
        id: 24,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Eevee: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/eevee.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/eevee.png"
        },
        name: "eevee",
        id: 25,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Vaporeon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/vaporeon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/vaporeon.png"
        },
        name: "vaporeon",
        id: 26,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Jolteon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/jolteon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/jolteon.png"
        },
        name: "jolteon",
        id: 27,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Flareon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/flareon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/flareon.png"
        },
        name: "flareon",
        id: 28,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Espeon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/espeon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/espeon.png"
        },
        name: "espeon",
        id: 29,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Umbreon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/umbreon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/umbreon.png"
        },
        name: "umbreon",
        id: 30,
        types: [{
            slot: 1,
            type: {
                name: "dark"
            }
        }]
    },
    Leafeon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/leafeon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/leafeon.png"
        },
        name: "leafeon",
        id: 31,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    Glaceon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/glaceon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/glaceon.png"
        },
        name: "glaceon",
        id: 32,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }]
    },
    Sylveon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/sylveon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/sylveon.png"
        },
        name: "sylveon",
        id: 33,
        types: [{
            slot: 1,
            type: {
                name: "fairy"
            }
        }]
    },
    Zubat: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/zubat.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/zubat.png"
        },
        name: "zubat",
        id: 34,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Golbat: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/golbat.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/golbat.png"
        },
        name: "golbat",
        id: 35,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Crobat: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/crobat.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/crobat.png"
        },
        name: "crobat",
        id: 36,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Drifloon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/drifloon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/drifloon.png"
        },
        name: "drifloon",
        id: 37,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Drifblim: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/drifblim.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/drifblim.png"
        },
        name: "drifblim",
        id: 38,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Kricketot: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/kricketot.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/kricketot.png"
        },
        name: "kricketot",
        id: 39,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }]
    },
    Kricketune: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/kricketune.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/kricketune.png"
        },
        name: "kricketune",
        id: 40,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }]
    },
    Buizel: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/buizel.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/buizel.png"
        },
        name: "buizel",
        id: 41,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Floatzel: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/floatzel.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/floatzel.png"
        },
        name: "floatzel",
        id: 42,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Burmy: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/burmy.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/burmy.png"
        },
        name: "burmy",
        id: 43,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }]
    },
    Wormadam: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/wormadam.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/wormadam.png"
        },
        name: "wormadam",
        id: 44,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "grass"
            }
        }]
    },
    Mothim: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/mothim.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/mothim.png"
        },
        name: "mothim",
        id: 45,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Geodude: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/geodude.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/geodude.png"
        },
        name: "geodude",
        id: 46,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Graveler: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/graveler.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/graveler.png"
        },
        name: "graveler",
        id: 47,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Golem: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/golem.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/golem.png"
        },
        name: "golem",
        id: 48,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Stantler: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/stantler.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/stantler.png"
        },
        name: "stantler",
        id: 49,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Wyrdeer: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/wyrdeer.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/wyrdeer.png"
        },
        name: "wyrdeer",
        id: 50,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "psychic"
            }
        }]
    },
    Munchlax: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/munchlax.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/munchlax.png"
        },
        name: "munchlax",
        id: 51,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Snorlax: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/snorlax.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/snorlax.png"
        },
        name: "snorlax",
        id: 52,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Paras: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/paras.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/paras.png"
        },
        name: "paras",
        id: 53,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "grass"
            }
        }]
    },
    Parasect: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/parasect.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/parasect.png"
        },
        name: "parasect",
        id: 54,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "grass"
            }
        }]
    },
    Pichu: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/pichu.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/pichu.png"
        },
        name: "pichu",
        id: 55,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Pikachu: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/pikachu.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/pikachu.png"
        },
        name: "pikachu",
        id: 56,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Raichu: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/raichu.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/raichu.png"
        },
        name: "raichu",
        id: 57,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Abra: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/abra.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/abra.png"
        },
        name: "abra",
        id: 58,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Kadabra: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/kadabra.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/kadabra.png"
        },
        name: "kadabra",
        id: 59,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Alakazam: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/alakazam.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/alakazam.png"
        },
        name: "alakazam",
        id: 60,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Chimchar: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/chimchar.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/chimchar.png"
        },
        name: "chimchar",
        id: 61,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Monferno: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/monferno.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/monferno.png"
        },
        name: "monferno",
        id: 62,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    Infernape: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/infernape.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/infernape.png"
        },
        name: "infernape",
        id: 63,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    Buneary: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/buneary.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/buneary.png"
        },
        name: "buneary",
        id: 64,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Lopunny: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/lopunny.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/lopunny.png"
        },
        name: "lopunny",
        id: 65,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Cherubi: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/cherubi.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/cherubi.png"
        },
        name: "cherubi",
        id: 66,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    Cherrim: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/cherrim.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/cherrim.png"
        },
        name: "cherrim",
        id: 67,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    Psyduck: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/psyduck.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/psyduck.png"
        },
        name: "psyduck",
        id: 68,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Golduck: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/golduck.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/golduck.png"
        },
        name: "golduck",
        id: 69,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Combee: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/combee.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/combee.png"
        },
        name: "combee",
        id: 70,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Vespiquen: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/vespiquen.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/vespiquen.png"
        },
        name: "vespiquen",
        id: 71,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Scyther: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/scyther.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/scyther.png"
        },
        name: "scyther",
        id: 72,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Scizor: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/scizor.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/scizor.png"
        },
        name: "scizor",
        id: 73,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Kleavor: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/kleavor.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/kleavor.png"
        },
        name: "kleavor",
        id: 74,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "rock"
            }
        }]
    },
    Heracross: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/heracross.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/heracross.png"
        },
        name: "heracross",
        id: 75,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    "Mime Jr.": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/mimejr.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/mimejr.png"
        },
        name: "mime jr.",
        id: 76,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }, {
            slot: 2,
            type: {
                name: "fairy"
            }
        }]
    },
    "Mr. Mime": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/mrmime.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/mrmime.png"
        },
        name: "mr. mime",
        id: 77,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }, {
            slot: 2,
            type: {
                name: "fairy"
            }
        }]
    },
    Aipom: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/aipom.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/aipom.png"
        },
        name: "aipom",
        id: 78,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Ambipom: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/ambipom.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/ambipom.png"
        },
        name: "ambipom",
        id: 79,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Magikarp: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/magikarp.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/magikarp.png"
        },
        name: "magikarp",
        id: 80,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Gyarados: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gyarados.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gyarados.png"
        },
        name: "gyarados",
        id: 81,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Shellos: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/shellos.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/shellos.png"
        },
        name: "shellos",
        id: 82,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Gastrodon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gastrodon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gastrodon.png"
        },
        name: "gastrodon",
        id: 83,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    "Qwilfish-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/qwilfish-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/qwilfish-hisui.png"
        },
        name: "qwilfish-hisui",
        id: 84,
        types: [{
            slot: 1,
            type: {
                name: "dark"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    "Overqwil-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/overqwil.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/overqwil.png"
        },
        name: "overqwil-hisui",
        id: 85,
        types: [{
            slot: 1,
            type: {
                name: "dark"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Happiny: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/happiny.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/happiny.png"
        },
        name: "happiny",
        id: 86,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Chansey: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/chansey.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/chansey.png"
        },
        name: "chansey",
        id: 87,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Blissey: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/blissey.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/blissey.png"
        },
        name: "blissey",
        id: 88,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Budew: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/budew.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/budew.png"
        },
        name: "budew",
        id: 89,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Roselia: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/roselia.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/roselia.png"
        },
        name: "roselia",
        id: 90,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Roserade: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/roserade.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/roserade.png"
        },
        name: "roserade",
        id: 91,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Carnivine: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/carnivine.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/carnivine.png"
        },
        name: "carnivine",
        id: 92,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    Petilil: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/petilil.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/petilil.png"
        },
        name: "petilil",
        id: 93,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    "Lilligant-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/lilligant-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/lilligant-hisui.png"
        },
        name: "lilligant-hisui",
        id: 94,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    Tangela: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/tangela.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/tangela.png"
        },
        name: "tangela",
        id: 95,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    Tangrowth: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/tangrowth.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/tangrowth.png"
        },
        name: "tangrowth",
        id: 96,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    Barboach: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/barboach.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/barboach.png"
        },
        name: "barboach",
        id: 97,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Whiscash: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/whiscash.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/whiscash.png"
        },
        name: "whiscash",
        id: 98,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Croagunk: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/croagunk.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/croagunk.png"
        },
        name: "croagunk",
        id: 99,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    Toxicroak: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/toxicroak.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/toxicroak.png"
        },
        name: "toxicroak",
        id: 100,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    Ralts: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/ralts.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/ralts.png"
        },
        name: "ralts",
        id: 101,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }, {
            slot: 2,
            type: {
                name: "fairy"
            }
        }]
    },
    Kirlia: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/kirlia.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/kirlia.png"
        },
        name: "kirlia",
        id: 102,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }, {
            slot: 2,
            type: {
                name: "fairy"
            }
        }]
    },
    Gardevoir: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gardevoir.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gardevoir.png"
        },
        name: "gardevoir",
        id: 103,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }, {
            slot: 2,
            type: {
                name: "fairy"
            }
        }]
    },
    Gallade: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gallade.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gallade.png"
        },
        name: "gallade",
        id: 104,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    Yanma: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/yanma.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/yanma.png"
        },
        name: "yanma",
        id: 105,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Yanmega: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/yanmega.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/yanmega.png"
        },
        name: "yanmega",
        id: 106,
        types: [{
            slot: 1,
            type: {
                name: "bug"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Hippopotas: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/hippopotas.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/hippopotas.png"
        },
        name: "hippopotas",
        id: 107,
        types: [{
            slot: 1,
            type: {
                name: "ground"
            }
        }]
    },
    Hippowdon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/hippowdon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/hippowdon.png"
        },
        name: "hippowdon",
        id: 108,
        types: [{
            slot: 1,
            type: {
                name: "ground"
            }
        }]
    },
    Pachirisu: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/pachirisu.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/pachirisu.png"
        },
        name: "pachirisu",
        id: 109,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Stunky: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/stunky.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/stunky.png"
        },
        name: "stunky",
        id: 110,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "dark"
            }
        }]
    },
    Skuntank: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/skuntank.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/skuntank.png"
        },
        name: "skuntank",
        id: 111,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "dark"
            }
        }]
    },
    Teddiursa: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/teddiursa.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/teddiursa.png"
        },
        name: "teddiursa",
        id: 112,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Ursaring: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/ursaring.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/ursaring.png"
        },
        name: "ursaring",
        id: 113,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Ursaluna: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/ursaluna.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/ursaluna.png"
        },
        name: "ursaluna",
        id: 114,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Goomy: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/goomy.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/goomy.png"
        },
        name: "goomy",
        id: 115,
        types: [{
            slot: 1,
            type: {
                name: "dragon"
            }
        }]
    },
    "Sliggoo-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/sliggoo-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/sliggoo-hisui.png"
        },
        name: "sliggoo-hisui",
        id: 116,
        types: [{
            slot: 1,
            type: {
                name: "dragon"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    "Goodra-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/goodra-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/goodra-hisui.png"
        },
        name: "goodra-hisui",
        id: 117,
        types: [{
            slot: 1,
            type: {
                name: "dragon"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Onix: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/onix.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/onix.png"
        },
        name: "onix",
        id: 118,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Steelix: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/steelix.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/steelix.png"
        },
        name: "steelix",
        id: 119,
        types: [{
            slot: 1,
            type: {
                name: "steel"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Rhyhorn: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/rhyhorn.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/rhyhorn.png"
        },
        name: "rhyhorn",
        id: 120,
        types: [{
            slot: 1,
            type: {
                name: "ground"
            }
        }, {
            slot: 2,
            type: {
                name: "rock"
            }
        }]
    },
    Rhydon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/rhydon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/rhydon.png"
        },
        name: "rhydon",
        id: 121,
        types: [{
            slot: 1,
            type: {
                name: "ground"
            }
        }, {
            slot: 2,
            type: {
                name: "rock"
            }
        }]
    },
    Rhyperior: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/rhyperior.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/rhyperior.png"
        },
        name: "rhyperior",
        id: 122,
        types: [{
            slot: 1,
            type: {
                name: "ground"
            }
        }, {
            slot: 2,
            type: {
                name: "rock"
            }
        }]
    },
    Bonsly: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/bonsly.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/bonsly.png"
        },
        name: "bonsly",
        id: 123,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }]
    },
    Sudowoodo: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/sudowoodo.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/sudowoodo.png"
        },
        name: "sudowoodo",
        id: 124,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }]
    },
    Lickitung: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/lickitung.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/lickitung.png"
        },
        name: "lickitung",
        id: 125,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Lickilicky: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/lickilicky.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/lickilicky.png"
        },
        name: "lickilicky",
        id: 126,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Togepi: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/togepi.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/togepi.png"
        },
        name: "togepi",
        id: 127,
        types: [{
            slot: 1,
            type: {
                name: "fairy"
            }
        }]
    },
    Togetic: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/togetic.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/togetic.png"
        },
        name: "togetic",
        id: 128,
        types: [{
            slot: 1,
            type: {
                name: "fairy"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Togekiss: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/togekiss.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/togekiss.png"
        },
        name: "togekiss",
        id: 129,
        types: [{
            slot: 1,
            type: {
                name: "fairy"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Turtwig: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/turtwig.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/turtwig.png"
        },
        name: "turtwig",
        id: 130,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    Grotle: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/grotle.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/grotle.png"
        },
        name: "grotle",
        id: 131,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    Torterra: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/torterra.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/torterra.png"
        },
        name: "torterra",
        id: 132,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Porygon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/porygon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/porygon.png"
        },
        name: "porygon",
        id: 133,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Porygon2: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/porygon2.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/porygon2.png"
        },
        name: "porygon2",
        id: 134,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    "Porygon-Z": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/porygonz.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/porygonz.png"
        },
        name: "porygon-z",
        id: 135,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Gastly: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gastly.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gastly.png"
        },
        name: "gastly",
        id: 136,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Haunter: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/haunter.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/haunter.png"
        },
        name: "haunter",
        id: 137,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Gengar: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gengar.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gengar.png"
        },
        name: "gengar",
        id: 138,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Spiritomb: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/spiritomb.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/spiritomb.png"
        },
        name: "spiritomb",
        id: 139,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }, {
            slot: 2,
            type: {
                name: "dark"
            }
        }]
    },
    Murkrow: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/murkrow.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/murkrow.png"
        },
        name: "murkrow",
        id: 140,
        types: [{
            slot: 1,
            type: {
                name: "dark"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Honchkrow: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/honchkrow.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/honchkrow.png"
        },
        name: "honchkrow",
        id: 141,
        types: [{
            slot: 1,
            type: {
                name: "dark"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    "Unown-A": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/unown.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/unown.png"
        },
        name: "unown-a",
        id: 142,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Spheal: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/spheal.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/spheal.png"
        },
        name: "spheal",
        id: 143,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }, {
            slot: 2,
            type: {
                name: "water"
            }
        }]
    },
    Sealeo: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/sealeo.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/sealeo.png"
        },
        name: "sealeo",
        id: 144,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }, {
            slot: 2,
            type: {
                name: "water"
            }
        }]
    },
    Walrein: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/walrein.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/walrein.png"
        },
        name: "walrein",
        id: 145,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }, {
            slot: 2,
            type: {
                name: "water"
            }
        }]
    },
    Remoraid: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/remoraid.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/remoraid.png"
        },
        name: "remoraid",
        id: 146,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Octillery: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/octillery.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/octillery.png"
        },
        name: "octillery",
        id: 147,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Skorupi: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/skorupi.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/skorupi.png"
        },
        name: "skorupi",
        id: 148,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "bug"
            }
        }]
    },
    Drapion: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/drapion.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/drapion.png"
        },
        name: "drapion",
        id: 149,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "dark"
            }
        }]
    },
    "Growlithe-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/growlithe-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/growlithe-hisui.png"
        },
        name: "growlithe-hisui",
        id: 150,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }, {
            slot: 2,
            type: {
                name: "rock"
            }
        }]
    },
    "Arcanine-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/arcanine-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/arcanine-hisui.png"
        },
        name: "arcanine-hisui",
        id: 151,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }, {
            slot: 2,
            type: {
                name: "rock"
            }
        }]
    },
    Glameow: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/glameow.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/glameow.png"
        },
        name: "glameow",
        id: 152,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Purugly: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/purugly.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/purugly.png"
        },
        name: "purugly",
        id: 153,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Machop: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/machop.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/machop.png"
        },
        name: "machop",
        id: 154,
        types: [{
            slot: 1,
            type: {
                name: "fighting"
            }
        }]
    },
    Machoke: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/machoke.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/machoke.png"
        },
        name: "machoke",
        id: 155,
        types: [{
            slot: 1,
            type: {
                name: "fighting"
            }
        }]
    },
    Machamp: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/machamp.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/machamp.png"
        },
        name: "machamp",
        id: 156,
        types: [{
            slot: 1,
            type: {
                name: "fighting"
            }
        }]
    },
    Chatot: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/chatot.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/chatot.png"
        },
        name: "chatot",
        id: 157,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Duskull: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/duskull.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/duskull.png"
        },
        name: "duskull",
        id: 158,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }]
    },
    Dusclops: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/dusclops.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/dusclops.png"
        },
        name: "dusclops",
        id: 159,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }]
    },
    Dusknoir: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/dusknoir.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/dusknoir.png"
        },
        name: "dusknoir",
        id: 160,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }]
    },
    Piplup: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/piplup.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/piplup.png"
        },
        name: "piplup",
        id: 161,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Prinplup: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/prinplup.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/prinplup.png"
        },
        name: "prinplup",
        id: 162,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Empoleon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/empoleon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/empoleon.png"
        },
        name: "empoleon",
        id: 163,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Mantyke: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/mantyke.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/mantyke.png"
        },
        name: "mantyke",
        id: 164,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Mantine: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/mantine.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/mantine.png"
        },
        name: "mantine",
        id: 165,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Basculin: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/basculin.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/basculin.png"
        },
        name: "basculin",
        id: 166,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Basculegion: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/basculegion.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/basculegion.png"
        },
        name: "basculegion",
        id: 167,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "ghost"
            }
        }]
    },
    Vulpix: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/vulpix.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/vulpix.png"
        },
        name: "vulpix",
        id: 168,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Ninetales: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/ninetales.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/ninetales.png"
        },
        name: "ninetales",
        id: 169,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Tentacool: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/tentacool.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/tentacool.png"
        },
        name: "tentacool",
        id: 170,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Tentacruel: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/tentacruel.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/tentacruel.png"
        },
        name: "tentacruel",
        id: 171,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "poison"
            }
        }]
    },
    Finneon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/finneon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/finneon.png"
        },
        name: "finneon",
        id: 172,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Lumineon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/lumineon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/lumineon.png"
        },
        name: "lumineon",
        id: 173,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Magby: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/magby.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/magby.png"
        },
        name: "magby",
        id: 174,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Magmar: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/magmar.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/magmar.png"
        },
        name: "magmar",
        id: 175,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Magmortar: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/magmortar.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/magmortar.png"
        },
        name: "magmortar",
        id: 176,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }]
    },
    Magnemite: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/magnemite.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/magnemite.png"
        },
        name: "magnemite",
        id: 177,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Magneton: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/magneton.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/magneton.png"
        },
        name: "magneton",
        id: 178,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Magnezone: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/magnezone.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/magnezone.png"
        },
        name: "magnezone",
        id: 179,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Bronzor: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/bronzor.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/bronzor.png"
        },
        name: "bronzor",
        id: 180,
        types: [{
            slot: 1,
            type: {
                name: "steel"
            }
        }, {
            slot: 2,
            type: {
                name: "psychic"
            }
        }]
    },
    Bronzong: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/bronzong.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/bronzong.png"
        },
        name: "bronzong",
        id: 181,
        types: [{
            slot: 1,
            type: {
                name: "steel"
            }
        }, {
            slot: 2,
            type: {
                name: "psychic"
            }
        }]
    },
    Elekid: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/elekid.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/elekid.png"
        },
        name: "elekid",
        id: 182,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Electabuzz: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/electabuzz.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/electabuzz.png"
        },
        name: "electabuzz",
        id: 183,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Electivire: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/electivire.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/electivire.png"
        },
        name: "electivire",
        id: 184,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }]
    },
    Gligar: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gligar.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gligar.png"
        },
        name: "gligar",
        id: 185,
        types: [{
            slot: 1,
            type: {
                name: "ground"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Gliscor: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gliscor.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gliscor.png"
        },
        name: "gliscor",
        id: 186,
        types: [{
            slot: 1,
            type: {
                name: "ground"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Gible: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gible.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gible.png"
        },
        name: "gible",
        id: 187,
        types: [{
            slot: 1,
            type: {
                name: "dragon"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Gabite: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/gabite.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/gabite.png"
        },
        name: "gabite",
        id: 188,
        types: [{
            slot: 1,
            type: {
                name: "dragon"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Garchomp: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/garchomp.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/garchomp.png"
        },
        name: "garchomp",
        id: 189,
        types: [{
            slot: 1,
            type: {
                name: "dragon"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Nosepass: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/nosepass.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/nosepass.png"
        },
        name: "nosepass",
        id: 190,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }]
    },
    Probopass: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/probopass.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/probopass.png"
        },
        name: "probopass",
        id: 191,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    "Voltorb-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/voltorb-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/voltorb-hisui.png"
        },
        name: "voltorb-hisui",
        id: 192,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }, {
            slot: 2,
            type: {
                name: "grass"
            }
        }]
    },
    "Electrode-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/electrode-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/electrode-hisui.png"
        },
        name: "electrode-Hisui",
        id: 193,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }, {
            slot: 2,
            type: {
                name: "grass"
            }
        }]
    },
    Rotom: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/rotom.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/rotom.png"
        },
        name: "rotom",
        id: 194,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }, {
            slot: 2,
            type: {
                name: "ghost"
            }
        }]
    },
    Chingling: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/chingling.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/chingling.png"
        },
        name: "chingling",
        id: 195,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Chimecho: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/chimecho.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/chimecho.png"
        },
        name: "chimecho",
        id: 196,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Misdreavus: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/misdreavus.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/misdreavus.png"
        },
        name: "misdreavus",
        id: 197,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }]
    },
    Mismagius: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/mismagius.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/mismagius.png"
        },
        name: "mismagius",
        id: 198,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }]
    },
    Cleffa: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/cleffa.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/cleffa.png"
        },
        name: "cleffa",
        id: 199,
        types: [{
            slot: 1,
            type: {
                name: "fairy"
            }
        }]
    },
    Clefairy: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/clefairy.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/clefairy.png"
        },
        name: "clefairy",
        id: 200,
        types: [{
            slot: 1,
            type: {
                name: "fairy"
            }
        }]
    },
    Clefable: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/clefable.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/clefable.png"
        },
        name: "clefable",
        id: 201,
        types: [{
            slot: 1,
            type: {
                name: "fairy"
            }
        }]
    },
    "Sneasel-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/sneasel-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/sneasel-hisui.png"
        },
        name: "sneasel-hisui",
        id: 202,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    "Sneasler-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/sneasler.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/sneasler.png"
        },
        name: "sneasler-hisui",
        id: 203,
        types: [{
            slot: 1,
            type: {
                name: "poison"
            }
        }, {
            slot: 2,
            type: {
                name: "fighting"
            }
        }]
    },
    Weavile: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/weavile.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/weavile.png"
        },
        name: "weavile",
        id: 204,
        types: [{
            slot: 1,
            type: {
                name: "dark"
            }
        }, {
            slot: 2,
            type: {
                name: "ice"
            }
        }]
    },
    Snorunt: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/snorunt.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/snorunt.png"
        },
        name: "snorunt",
        id: 205,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }]
    },
    Glalie: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/glalie.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/glalie.png"
        },
        name: "glalie",
        id: 206,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }]
    },
    Froslass: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/froslass.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/froslass.png"
        },
        name: "froslass",
        id: 207,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }, {
            slot: 2,
            type: {
                name: "ghost"
            }
        }]
    },
    Cranidos: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/cranidos.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/cranidos.png"
        },
        name: "cranidos",
        id: 208,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }]
    },
    Rampardos: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/rampardos.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/rampardos.png"
        },
        name: "rampardos",
        id: 209,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }]
    },
    Shieldon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/shieldon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/shieldon.png"
        },
        name: "shieldon",
        id: 210,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Bastiodon: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/bastiodon.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/bastiodon.png"
        },
        name: "bastiodon",
        id: 211,
        types: [{
            slot: 1,
            type: {
                name: "rock"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Swinub: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/swinub.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/swinub.png"
        },
        name: "swinub",
        id: 212,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Piloswine: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/piloswine.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/piloswine.png"
        },
        name: "piloswine",
        id: 213,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Mamoswine: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/mamoswine.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/mamoswine.png"
        },
        name: "mamoswine",
        id: 214,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }, {
            slot: 2,
            type: {
                name: "ground"
            }
        }]
    },
    Bergmite: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/bergmite.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/bergmite.png"
        },
        name: "bergmite",
        id: 215,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }]
    },
    "Avalugg-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/avalugg-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/avalugg-hisui.png"
        },
        name: "avalugg-hisui",
        id: 216,
        types: [{
            slot: 1,
            type: {
                name: "ice"
            }
        }, {
            slot: 2,
            type: {
                name: "rock"
            }
        }]
    },
    Snover: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/snover.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/snover.png"
        },
        name: "snover",
        id: 217,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "ice"
            }
        }]
    },
    Abomasnow: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/abomasnow.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/abomasnow.png"
        },
        name: "abomasnow",
        id: 218,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }, {
            slot: 2,
            type: {
                name: "ice"
            }
        }]
    },
    "Zorua-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/zorua-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/zorua-hisui.png"
        },
        name: "zorua-hisui",
        id: 219,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "ghost"
            }
        }]
    },
    "Zoroark-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/zoroark-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/zoroark-hisui.png"
        },
        name: "zoroark-hisui",
        id: 220,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "ghost"
            }
        }]
    },
    Rufflet: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/rufflet.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/rufflet.png"
        },
        name: "rufflet",
        id: 221,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    "Braviary-Hisui": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/braviary-hisui.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/braviary-hisui.png"
        },
        name: "braviary-hisui",
        id: 222,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Riolu: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/riolu.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/riolu.png"
        },
        name: "riolu",
        id: 223,
        types: [{
            slot: 1,
            type: {
                name: "fighting"
            }
        }]
    },
    Lucario: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/lucario.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/lucario.png"
        },
        name: "lucario",
        id: 224,
        types: [{
            slot: 1,
            type: {
                name: "fighting"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Uxie: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/uxie.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/uxie.png"
        },
        name: "uxie",
        id: 225,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Mesprit: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/mesprit.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/mesprit.png"
        },
        name: "mesprit",
        id: 226,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Azelf: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/azelf.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/azelf.png"
        },
        name: "azelf",
        id: 227,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Heatran: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/heatran.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/heatran.png"
        },
        name: "heatran",
        id: 228,
        types: [{
            slot: 1,
            type: {
                name: "fire"
            }
        }, {
            slot: 2,
            type: {
                name: "steel"
            }
        }]
    },
    Regigigas: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/regigigas.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/regigigas.png"
        },
        name: "regigigas",
        id: 229,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Cresselia: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/cresselia.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/cresselia.png"
        },
        name: "cresselia",
        id: 230,
        types: [{
            slot: 1,
            type: {
                name: "psychic"
            }
        }]
    },
    Thundurus: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/thundurus.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/thundurus.png"
        },
        name: "thundurus",
        id: 231,
        types: [{
            slot: 1,
            type: {
                name: "electric"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Tornadus: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/tornadus.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/tornadus.png"
        },
        name: "tornadus",
        id: 232,
        types: [{
            slot: 1,
            type: {
                name: "flying"
            }
        }]
    },
    Landorus: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/landorus.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/landorus.png"
        },
        name: "landorus",
        id: 233,
        types: [{
            slot: 1,
            type: {
                name: "ground"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Enamorus: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/enamorus.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/enamorus.png"
        },
        name: "enamorus",
        id: 234,
        types: [{
            slot: 1,
            type: {
                name: "fairy"
            }
        }, {
            slot: 2,
            type: {
                name: "flying"
            }
        }]
    },
    Dialga: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/dialga.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/dialga.png"
        },
        name: "dialga",
        id: 235,
        types: [{
            slot: 1,
            type: {
                name: "steel"
            }
        }, {
            slot: 2,
            type: {
                name: "dragon"
            }
        }]
    },
    Palkia: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/palkia.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/palkia.png"
        },
        name: "palkia",
        id: 236,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }, {
            slot: 2,
            type: {
                name: "dragon"
            }
        }]
    },
    Giratina: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/giratina.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/giratina.png"
        },
        name: "giratina",
        id: 237,
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }, {
            slot: 2,
            type: {
                name: "dragon"
            }
        }]
    },
    "Giratina-Origin": {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/giratina.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/giratina.png"
        },
        name: "giratina-origin",
        id: "237-o",
        types: [{
            slot: 1,
            type: {
                name: "ghost"
            }
        }, {
            slot: 2,
            type: {
                name: "dragon"
            }
        }]
    },
    Arceus: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/arceus.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/arceus.png"
        },
        name: "arceus",
        id: 238,
        types: [{
            slot: 1,
            type: {
                name: "normal"
            }
        }]
    },
    Phione: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/phione.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/phione.png"
        },
        name: "phione",
        id: 239,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Manaphy: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/manaphy.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/manaphy.png"
        },
        name: "manaphy",
        id: 240,
        types: [{
            slot: 1,
            type: {
                name: "water"
            }
        }]
    },
    Shaymin: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/shaymin.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/shaymin.png"
        },
        name: "shaymin",
        id: 241,
        types: [{
            slot: 1,
            type: {
                name: "grass"
            }
        }]
    },
    Darkrai: {
        sprites: {
            front_shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/darkrai.png",
            front_default: "https://play.pokemonshowdown.com/sprites/gen5/darkrai.png"
        },
        name: "darkrai",
        id: 242,
        types: [{
            slot: 1,
            type: {
                name: "dark"
            }
        }]
    }
}
  , ks = {
    normal: "#A8A77A",
    fighting: "#C22E28",
    flying: "#A98FF3",
    poison: "#A33EA1",
    ground: "#E2BF65",
    rock: "#B6A136",
    bug: "#A6B91A",
    ghost: "#735797",
    steel: "#B7B7CE",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    psychic: "#F95587",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    dark: "#705746",
    fairy: "#D685AD",
    shadow: "#121212"
}
  , ws = ({type: t}) => {
    const e = v()
      , a = ks[t.type.name];
    return s(ze, {
        label: t.type.name.toLocaleUpperCase(),
        sx: {
            ml: 1,
            backgroundColor: a,
            fontWeight: "bold",
            color: e.palette.getContrastText(a)
        }
    })
}
  , bs = {}
  , ve = Object.entries(bs).reduce( (t, [e,a]) => f(c({}, t), {
    [e]: Object.entries(a).flatMap( ([p,i]) => Object.entries(i).map( ([o,d]) => c({
        category: p,
        name: o
    }, d)))
}), {})
  , Ss = {
    Abomasnow: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Blizzard", "Wood Hammer", "Icicle Crash"],
                ability: "Snow Warning",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Abra: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dazzling Gleam", "Thunder Punch", "Ice Punch", "Drain Punch"],
                ability: "Synchronize",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Aipom: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double Hit", "Iron Tail", "Swift", "Mud Bomb"],
                ability: "Pickup",
                item: "",
                nature: "Jolly",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Alakazam: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Psycho Cut", "Zen Headbutt", "Recover", "Psychic"],
                ability: "Synchronize",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Ambipom: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double Hit", "Iron Tail", "Double-Edge", "Mud Bomb"],
                ability: "Pickup",
                item: "",
                nature: "Jolly",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Arcanine-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rock Slide", "Crunch", "Double-Edge", "Fire Fang"],
                ability: "Intimidate",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 252,
                    atk: 252,
                    def: 0,
                    spa: 0,
                    spd: 4,
                    spe: 0
                }
            }
        }
    },
    Arceus: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Recover", "Extrasensory", "Judgment", "Hyper Beam"],
                ability: "Multitype",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Avalugg-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Mountain Gale", "Blizzard", "Double-Edge", "Earth Power"],
                ability: "Strong Jaw",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Azelf: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Self-Destruct", "Tri Attack", "Nasty Plot", "Mystical Power"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Barboach: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Zen Headbutt", "Aqua Tail", "Mud Bomb", "Rest"],
                ability: "Oblivious",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Basculegion-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Crunch", "Wave Crash", "Double-Edge", "Zen Headbutt"],
                ability: "Adaptability",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Basculin: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Crunch", "Wave Crash", "Double-Edge", "Zen Headbutt"],
                ability: "Adaptability",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Bastiodon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Head", "Earth Power", "Stealth Rock", "Double-Edge"],
                ability: "Sturdy",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Beautifly: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Stun Spore", "Silver Wind", "Venoshock", "Iron Defense"],
                ability: "Swarm",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Bergmite: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Defense", "Crunch", "Blizzard", "Double-Edge"],
                ability: "Own Tempo",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Bibarel: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rest", "Crunch", "Aqua Tail", "Bite"],
                ability: "Unaware",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 252,
                    def: 4,
                    spa: 0,
                    spd: 0,
                    spe: 252
                }
            }
        }
    },
    Bidoof: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rollout", "Tackle", "Bite", "Rest"],
                ability: "Unaware",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 252,
                    def: 4,
                    spa: 0,
                    spd: 0,
                    spe: 252
                }
            }
        }
    },
    Blissey: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Calm Mind", "Soft-Boiled", "Double-Edge", "Draining Kiss"],
                ability: "Serene Grace",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Bonsly: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Defense", "Mimic", "Double-Edge", "Rock Slide"],
                ability: "Rock Head",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Braviary-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Brave Bird", "Hurricane", "Roost", "Double-Edge"],
                ability: "Keen Eye",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Bronzong: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hypnosis", "Flash Cannon", "Extrasensory", "Hex"],
                ability: "Levitate",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Bronzor: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hypnosis", "Flash Cannon", "Extrasensory", "Hex"],
                ability: "Levitate",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Budew: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Venoshock", "Absorb", "Poison Powder", "Stun Spore"],
                ability: "Poison Point",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Buizel: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double Hit", "Aqua Jet", "Swift", "Water Pulse"],
                ability: "Swift Swim",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Buneary: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double Hit", "Baby-Doll Eyes", "Swift", "Draining Kiss"],
                ability: "Klutz",
                item: "",
                nature: "Jolly",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Burmy: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Struggle Bug", "", "", ""],
                ability: "Shed Skin",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Burmy-Sandy": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Struggle Bug", "", "", ""],
                ability: "Shed Skin",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Burmy-Trash": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Struggle Bug", "", "", ""],
                ability: "Shed Skin",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Carnivine: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Crunch", "Acid Spray", "Bite", "Stun Spore"],
                ability: "Levitate",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Cascoon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Defense", "Poison Sting", "Tackle", ""],
                ability: "Shed Skin",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Chansey: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Calm Mind", "Soft-Boiled", "Double-Edge", "Draining Kiss"],
                ability: "Serene Grace",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Chatot: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Mimic", "Nasty Plot", "Play Rough"],
                ability: "Keen Eye",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Cherrim: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Sleep Powder", "Double-Edge", "Draining Kiss"],
                ability: "Flower Gift",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Cherubi: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Sleep Powder", "Double-Edge", "Draining Kiss"],
                ability: "Chlorophyll",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Chimchar: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Nasty Plot", "Ember", "Swift", "Flame Wheel"],
                ability: "Blaze",
                item: "",
                nature: "Jolly",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Chimecho: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Extrasensory", "Recover", "Double-Edge", "Hypnosis"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Chingling: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Extrasensory", "Recover", "Double-Edge", "Hypnosis"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Clefable: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Calm Mind", "Psychic", "Moonblast", "Double-Edge"],
                ability: "Magic Guard",
                item: "",
                nature: "Calm",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Clefairy: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Calm Mind", "Psychic", "Moonblast", "Double-Edge"],
                ability: "Magic Guard",
                item: "",
                nature: "Calm",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Cleffa: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Calm Mind", "Psychic", "Moonblast", "Double-Edge"],
                ability: "Magic Guard",
                item: "",
                nature: "Calm",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Combee: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Gust", "Ominous Wind", "Swift", ""],
                ability: "Honey Gather",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Cranidos: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Head", "Crunch", "Double-Edge", "Head Smash"],
                ability: "Mold Breaker",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Cresselia: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Recover", "Psychic", "Moonblast", "Lunar Blessing"],
                ability: "Levitate",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Croagunk: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Nasty Plot", "Poison Jab", "Mud Bomb", "Venoshock"],
                ability: "Anticipation",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Crobat: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Cross Poison", "Air Slash", "Leech Life", "Air Cutter"],
                ability: "Inner Focus",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Cyndaquil: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Swift", "Flamethrower", "Overheat", "Flame Wheel"],
                ability: "Blaze",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 252,
                    spd: 4,
                    spe: 252
                }
            }
        }
    },
    Darkrai: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dark Pulse", "Shadow Ball", "Psychic", "Dark Void"],
                ability: "Bad Dreams",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Dartrix: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Magical Leaf", "Air Slash", "Leaf Blade", "Leaf Storm"],
                ability: "Overgrow",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 252,
                    atk: 252,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Decidueye-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Leaf Blade", "Triple Arrows", "Brave Bird", "Leaf Storm"],
                ability: "Overgrow",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 252,
                    atk: 252,
                    def: 0,
                    spa: 4,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Dewott: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Slash", "Aqua Tail", "Hydro Pump", "Water Pulse"],
                ability: "Torrent",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 4,
                    atk: 252,
                    def: 252,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Dialga: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Flash Cannon", "Roar of Time", "Earth Power", "Iron Tail"],
                ability: "Pressure",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Dialga-Origin": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Flash Cannon", "Roar of Time", "Earth Power", "Iron Tail"],
                ability: "Pressure",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Drapion: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Swords Dance", "X-Scissor", "Crunch", "Cross Poison"],
                ability: "Battle Armor",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Drifblim: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hex", "Mystical Fire", "Extrasensory", "Shadow Ball"],
                ability: "Aftermath",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Drifloon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Confusion", "Hypnosis", "Astonish", "Calm Mind"],
                ability: "Aftermath",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Dusclops: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dark Pulse", "Shadow Ball", "Psychic", "Leech Life"],
                ability: "Pressure",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Dusknoir: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dark Pulse", "Shadow Ball", "Psychic", "Leech Life"],
                ability: "Pressure",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Duskull: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dark Pulse", "Shadow Ball", "Psychic", "Leech Life"],
                ability: "Levitate",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Dustox: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Poison Powder", "Silver Wind", "Venoshock", "Iron Defense"],
                ability: "Shield Dust",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Eevee: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Tackle", "Quick Attack", "Swift", ""],
                ability: "Run Away",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Electabuzz: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Thunder Punch", "Thunderbolt", "Thunder", "Thunder Wave"],
                ability: "Static",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Electivire: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Thunder Punch", "Thunderbolt", "Thunder", "Thunder Wave"],
                ability: "Motor Drive",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Electrode-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Thunderbolt", "Thunder", "Self-Destruct"],
                ability: "Soundproof",
                item: "",
                nature: "Hasty",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Elekid: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Thunder Punch", "Thunderbolt", "Thunder", "Thunder Wave"],
                ability: "Static",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Empoleon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hydro Pump", "Wave Crash", "Liquidation", "Double-Edge"],
                ability: "Torrent",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Enamorus: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Springtide Storm", "Extrasensory", "Crunch", "Moonblast"],
                ability: "Healer",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Espeon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Mimic", "Psychic", "Calm Mind"],
                ability: "Synchronize",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Finneon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Roost", "Water Pulse", "Silver Wind"],
                ability: "Swift Swim",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Flareon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Baby-Doll Eyes", "Mimic", "Flamethrower", "Calm Mind"],
                ability: "Flash Fire",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Floatzel: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double Hit", "Crunch", "Swift", "Water Pulse"],
                ability: "Swift Swim",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Froslass: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Blizzard", "Crunch", "Shadow Ball", "Icicle Crash"],
                ability: "Snow Cloak",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Gabite: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dragon Claw", "Earth Power", "Double-Edge", "Outrage"],
                ability: "Sand Veil",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Gallade: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Psychic", "Leaf Blade", "Close Combat", "Swords Dance"],
                ability: "Steadfast",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Garchomp: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dragon Claw", "Earth Power", "Double-Edge", "Outrage"],
                ability: "Sand Veil",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Gardevoir: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Moonblast", "Recover", "Psychic", "Aura Sphere"],
                ability: "Synchronize",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Gastly: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hypnosis", "Poison Gas", "Hex", "Venoshock"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Gastrodon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Mud Bomb", "Earth Power", "Recover", "Hydro Pump"],
                ability: "Storm Drain",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Gastrodon-East": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Mud Bomb", "Earth Power", "Recover", "Ancient Power"],
                ability: "Storm Drain",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Gengar: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hypnosis", "Dark Pulse", "Shadow Ball", "Venoshock"],
                ability: "Cursed Body",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Geodude: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rock Slide", "Tackle", "Mud-Slap", "Iron Defense"],
                ability: "Sturdy",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Gible: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dragon Claw", "Earth Power", "Bulldoze", "Slash"],
                ability: "Sand Veil",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Giratina: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Earth Power", "Shadow Force", "Dragon Claw", "Dragon Pulse"],
                ability: "Pressure",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Giratina-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Earth Power", "Shadow Force", "Dragon Claw", "Dragon Pulse"],
                ability: "Levitate",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Glaceon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Mimic", "Ice Beam", "Calm Mind"],
                ability: "Snow Cloak",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Glalie: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Ice Fang", "Crunch", "Icicle Crash", "Blizzard"],
                ability: "Ice Body",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Glameow: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Night Slash", "Play Rough", "Double-Edge", "Slash"],
                ability: "Limber",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Gligar: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Slash", "Poison Jab", "X-Scissor", "Mud Bomb"],
                ability: "Sand Veil",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Gliscor: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["X-Scissor", "Earth Power", "Swords Dance", "Poison Jab"],
                ability: "Sand Veil",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Golbat: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Cross Poison", "Air Slash", "Bite", "Air Cutter"],
                ability: "Inner Focus",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Golduck: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Zen Headbutt", "Aqua Tail", "Hydro Pump", "Hypnosis"],
                ability: "Damp",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Golem: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Self-Destruct", "Stone Edge", "Stealth Rock", "Double-Edge"],
                ability: "Sturdy",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Goodra-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Head", "Dragon Pulse", "Shelter", "Hydro Pump"],
                ability: "Overcoat",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Goomy: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dragon Pulse", "Shelter", "Hydro Pump", "Water Pulse"],
                ability: "Hydration",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Graveler: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rock Slide", "Bulldoze", "Stealth Rock", "Iron Defense"],
                ability: "Sturdy",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Grotle: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Sleep Powder", "Leaf Blade", "Double-Edge", "Bulldoze"],
                ability: "Overgrow",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Growlithe-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rock Slide", "Crunch", "Double-Edge", "Fire Fang"],
                ability: "Intimidate",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 252,
                    atk: 252,
                    def: 0,
                    spa: 0,
                    spd: 4,
                    spe: 0
                }
            }
        }
    },
    Gyarados: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hydro Pump", "Hyper Beam", "Aqua Tail", "Hurricane"],
                ability: "Intimidate",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Happiny: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Calm Mind", "Fairy Wind", "Baby-Doll Eyes", "Draining Kiss"],
                ability: "Serene Grace",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Haunter: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hypnosis", "Dark Pulse", "Shadow Ball", "Venoshock"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Heatran: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Head", "Crunch", "Earth Power", "Magma Storm"],
                ability: "Flash Fire",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Heracross: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Slash", "Swords Dance", "Double-Edge", "Aerial Ace"],
                ability: "Guts",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Hippopotas: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Crunch", "High Horsepower", "Bite", "Mud Bomb"],
                ability: "Sand Stream",
                item: "",
                nature: "Careful",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Hippowdon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Crunch", "High Horsepower", "Double-Edge", "Mud Bomb"],
                ability: "Sand Stream",
                item: "",
                nature: "Careful",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Honchkrow: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Brave Bird", "Air Slash", "Nasty Plot", "Dark Pulse"],
                ability: "Super Luck",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Infernape: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Raging Fury", "Flare Blitz", "Close Combat", "Double-Edge"],
                ability: "Blaze",
                item: "",
                nature: "Jolly",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Jolteon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Mimic", "Thunderbolt", "Calm Mind"],
                ability: "Volt Absorb",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Kadabra: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Psycho Cut", "Zen Headbutt", "Hypnosis", "Calm Mind"],
                ability: "Synchronize",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Kirlia: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Calm Mind", "Psychic", "Draining Kiss", "Hypnosis"],
                ability: "Synchronize",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Kleavor: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Swords Dance", "Aerial Ace", "Double Hit"],
                ability: "Sheer Force",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Kricketot: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Absorb", "Tackle", "", ""],
                ability: "Shed Skin",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Kricketune: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Night Slash", "Tackle", "Aerial Ace", "Slash"],
                ability: "Swarm",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Landorus: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Sandsear Storm", "Extrasensory", "Crunch", "Earth Power"],
                ability: "Sand Force",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Leafeon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Mimic", "Leaf Blade", "Calm Mind"],
                ability: "Leaf Guard",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Lickilicky: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Rollout", "Bulldoze", "Zen Headbutt"],
                ability: "Oblivious",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Lickitung: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Rollout", "Bulldoze", "Zen Headbutt"],
                ability: "Oblivious",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Lilligant-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Sleep Powder", "Recover", "Leaf Storm"],
                ability: "Chlorophyll",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Lopunny: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Close Combat", "Double Hit", "Play Rough", "Double-Edge"],
                ability: "Klutz",
                item: "",
                nature: "Jolly",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Lucario: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dragon Pulse", "Close Combat", "Crunch", "Bulk Up"],
                ability: "Steadfast",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Lumineon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Roost", "Hydro Pump", "Silver Wind"],
                ability: "Swift Swim",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Luxio: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Thunder Wave", "Crunch", "Bite", "Thunder Fang"],
                ability: "Rivalry",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Luxray: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Thunder Wave", "Crunch", "Wild Charge", "Thunder Fang"],
                ability: "Rivalry",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Machamp: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Close Combat", "Bulk Up", "Drain Punch", "Double-Edge"],
                ability: "Guts",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Machoke: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Mach Punch", "Bulk Up", "Double-Edge", "Close Combat"],
                ability: "Guts",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Machop: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Mach Punch", "Bulk Up", "Bullet Punch", "Double Hit"],
                ability: "Guts",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Magby: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Fire Punch", "Flamethrower", "Flame Wheel", "Poison Gas"],
                ability: "Flame Body",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Magikarp: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Splash", "", "", ""],
                ability: "Swift Swim",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Magmar: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Fire Punch", "Flamethrower", "Fire Blast", "Poison Gas"],
                ability: "Flame Body",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Magmortar: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Fire Punch", "Flamethrower", "Fire Blast", "Poison Gas"],
                ability: "Flame Body",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Magnemite: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Flash Cannon", "Thunderbolt", "Thunder", "Spark"],
                ability: "Magnet Pull",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Magneton: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Flash Cannon", "Tri Attack", "Thunderbolt", "Thunder"],
                ability: "Magnet Pull",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Magnezone: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Flash Cannon", "Tri Attack", "Thunderbolt", "Thunder"],
                ability: "Magnet Pull",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Mamoswine: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["High Horsepower", "Ancient Power", "Blizzard", "Double-Edge"],
                ability: "Oblivious",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Manaphy: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Moonblast", "Hydro Pump", "Shadow Ball"],
                ability: "Hydration",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Mantine: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Roost", "Hydro Pump", "Water Pulse"],
                ability: "Water Absorb",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Mantyke: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Roost", "Hydro Pump", "Water Pulse"],
                ability: "Water Absorb",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Mesprit: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Recover", "Tri Attack", "Calm Mind", "Mystical Power"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Mime Jr.": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Mimic", "Hypnosis", "Iron Defense", "Zen Headbutt"],
                ability: "Filter",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Misdreavus: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Extrasensory", "Power Gem", "Shadow Ball", "Hex"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Mismagius: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Extrasensory", "Power Gem", "Shadow Ball", "Hex"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Monferno: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Flame Wheel", "Nasty Plot", "Swift", "Mach Punch"],
                ability: "Blaze",
                item: "",
                nature: "Jolly",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Mothim: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Psychic", "Confusion", "Silver Wind"],
                ability: "Swarm",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Mr. Mime": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Mimic", "Hypnosis", "Iron Defense", "Zen Headbutt"],
                ability: "Filter",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Munchlax: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Bite", "Tackle", "Rest", "Bulldoze"],
                ability: "Thick Fat",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Murkrow: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Night Slash", "Air Slash", "Nasty Plot", "Dark Pulse"],
                ability: "Super Luck",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Ninetales: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hex", "Extrasensory", "Flamethrower", "Fire Blast"],
                ability: "Flash Fire",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Ninetales-Alola": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Ice Fang", "Dazzling Gleam", "Ice Beam", "Draining Kiss"],
                ability: "Snow Cloak",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Nosepass: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rock Slide", "Power Gem", "Earth Power", "Iron Defense"],
                ability: "Sturdy",
                item: "",
                nature: "Relaxed",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Octillery: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Water Pulse", "Ice Beam", "Hydro Pump", "Hyper Beam"],
                ability: "Suction Cups",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Onix: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Stealth Rock", "High Horsepower", "Bulldoze", "Rock Slide"],
                ability: "Sturdy",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Oshawott: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Slash", "Aqua Tail", "Hydro Pump", "Water Pulse"],
                ability: "Torrent",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 4,
                    atk: 252,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 252
                }
            }
        }
    },
    "Overqwil-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Self-Destruct", "Poison Jab", "Aqua Tail"],
                ability: "Swift Swim",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Pachirisu: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Swift", "Thunderbolt", "Crunch", "Play Rough"],
                ability: "Run Away",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Palkia: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hydro Pump", "Spacial Rend", "Earth Power", "Aqua Tail"],
                ability: "Pressure",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Palkia-Origin": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hydro Pump", "Spacial Rend", "Earth Power", "Aqua Tail"],
                ability: "Pressure",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Paras: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Slash", "Stun Spore", "Poison Powder", "Venoshock"],
                ability: "Dry Skin",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Parasect: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Slash", "Spore", "Poison Powder", "Venoshock"],
                ability: "Dry Skin",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Petilil: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Sleep Powder", "Recover", "Leaf Storm"],
                ability: "Chlorophyll",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Phione: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Zen Headbutt", "Confusion", "Water Pulse", "Acid Armor"],
                ability: "Hydration",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Pichu: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Spark", "Quick Attack", "Thunder Wave", "Swift"],
                ability: "Static",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Pikachu: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Spark", "Quick Attack", "Thunder Wave", "Swift"],
                ability: "Static",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Piloswine: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["High Horsepower", "Ancient Power", "Blizzard", "Double-Edge"],
                ability: "Oblivious",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Piplup: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Roost", "Bubble", "Aerial Ace", "Water Pulse"],
                ability: "Torrent",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Ponyta: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Tackle", "Ember", "Double Hit", "Flame Wheel"],
                ability: "Run Away",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Porygon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Tri Attack", "Thunderbolt", "Thunder Wave", "Spark"],
                ability: "Trace",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Porygon2: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Tri Attack", "Thunderbolt", "Recover", "Spark"],
                ability: "Trace",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Porygon-Z": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Tri Attack", "Thunderbolt", "Recover", "Hyper Beam"],
                ability: "Adaptability",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Prinplup: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Roost", "Liquidation", "Double-Edge", "Water Pulse"],
                ability: "Torrent",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Probopass: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Earth Power", "Power Gem", "Tri Attack", "Flash Cannon"],
                ability: "Sturdy",
                item: "",
                nature: "Relaxed",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Psyduck: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Zen Headbutt", "Confusion", "Water Pulse", "Hypnosis"],
                ability: "Damp",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Purugly: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Night Slash", "Play Rough", "Double-Edge", "Slash"],
                ability: "Thick Fat",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Quilava: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Swift", "Flamethrower", "Overheat", "Flame Wheel"],
                ability: "Blaze",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Qwilfish-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Self-Destruct", "Poison Jab", "Aqua Tail"],
                ability: "Swift Swim",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Raichu: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Spark", "Thunderbolt", "Iron Tail", "Thunder"],
                ability: "Static",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Ralts: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Calm Mind", "Psychic", "Draining Kiss", "Hypnosis"],
                ability: "Synchronize",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Rampardos: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Head", "Crunch", "Double-Edge", "Head Smash"],
                ability: "Mold Breaker",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Rapidash: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hypnosis", "Fire Blast", "Double-Edge", "Flame Wheel"],
                ability: "Run Away",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Regigigas: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Zen Headbutt", "Iron Head", "Crush Grip", "Giga Impact"],
                ability: "Slow Start",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Remoraid: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Ice Beam", "Hydro Pump", "Charge Beam", "Water Pulse"],
                ability: "Hustle",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Rhydon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rock Slide", "High Horsepower", "Double-Edge", "Giga Impact"],
                ability: "Rock Head",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Rhyhorn: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rock Slide", "High Horsepower", "Rock Smash", "Stealth Rock"],
                ability: "Rock Head",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Rhyperior: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rock Slide", "High Horsepower", "Double-Edge", "Giga Impact"],
                ability: "Solid Rock",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Riolu: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Aura Sphere", "Crunch", "Bulk Up", "Close Combat"],
                ability: "Steadfast",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Roselia: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Venoshock", "Poison Jab", "Poison Powder", "Stun Spore"],
                ability: "Poison Point",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Roserade: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Venoshock", "Poison Jab", "Energy Ball", "Stun Spore"],
                ability: "Poison Point",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Rotom: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Shadow Ball", "Thunderbolt", "Thunder", "Thunder Wave"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Rotom-Fan": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Shadow Ball", "Thunderbolt", "Thunder", "Thunder Wave"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Rotom-Frost": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Shadow Ball", "Thunderbolt", "Thunder", "Thunder Wave"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Rotom-Heat": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Shadow Ball", "Thunderbolt", "Thunder", "Thunder Wave"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Rotom-Mow": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Shadow Ball", "Thunderbolt", "Thunder", "Thunder Wave"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Rotom-Wash": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Shadow Ball", "Thunderbolt", "Thunder", "Thunder Wave"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Rowlet: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Magical Leaf", "Air Slash", "Leaf Blade", "Leaf Storm"],
                ability: "Overgrow",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 252,
                    atk: 252,
                    def: 0,
                    spa: 0,
                    spd: 4,
                    spe: 0
                }
            }
        }
    },
    Rufflet: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Roost", "Double-Edge", "Brave Bird"],
                ability: "Keen Eye",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Samurott-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Dark Pulse", "Hydro Pump", "Slash", "Aqua Tail"],
                ability: "Torrent",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Scizor: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["X-Scissor", "Close Combat", "Bullet Punch", "Iron Head"],
                ability: "Technician",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Scyther: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Swords Dance", "Aerial Ace", "Double Hit"],
                ability: "Technician",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Sealeo: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Liquidation", "Ice Beam", "Blizzard", "Rest"],
                ability: "Thick Fat",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Shaymin: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Recover", "Energy Ball", "Earth Power", "Seed Flare"],
                ability: "Natural Cure",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Shellos: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Mud Bomb", "Earth Power", "Recover", "Ancient Power"],
                ability: "Storm Drain",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Shellos-East": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Mud Bomb", "Earth Power", "Recover", "Ancient Power"],
                ability: "Storm Drain",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Shieldon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Head", "Earth Power", "Stealth Rock", "Double-Edge"],
                ability: "Sturdy",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Shinx: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Thunder Wave", "Thunder Shock", "Bite", "Thunder Fang"],
                ability: "Rivalry",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Silcoon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Defense", "Poison Sting", "Tackle", ""],
                ability: "Shed Skin",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Skorupi: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Swords Dance", "X-Scissor", "Venoshock", "Cross Poison"],
                ability: "Battle Armor",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Skuntank: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Night Slash", "Poison Jab", "Flamethrower", "Double-Edge"],
                ability: "Aftermath",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Sliggoo-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Head", "Dragon Pulse", "Shelter", "Hydro Pump"],
                ability: "Overcoat",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Sneasel-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Poison Jab", "Swords Dance", "Blizzard", "Slash"],
                ability: "Keen Eye",
                item: "",
                nature: "Jolly",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Sneasler-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Poison Jab", "Swords Dance", "Close Combat", "Slash"],
                ability: "Pressure",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Snorlax: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Bite", "Zen Headbutt", "Crunch", "High Horsepower"],
                ability: "Thick Fat",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Snorunt: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Crunch", "Icicle Crash", "Blizzard", "Ice Fang"],
                ability: "Ice Body",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Snover: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Blizzard", "Wood Hammer", "Icicle Crash"],
                ability: "Snow Warning",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Spheal: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Liquidation", "Ice Beam", "Blizzard", "Rest"],
                ability: "Thick Fat",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Spiritomb: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Extrasensory", "Dark Pulse", "Shadow Ball", "Nasty Plot"],
                ability: "Pressure",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Stantler: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Psyshield Bash", "Confusion", "Hypnosis", "Calm Mind"],
                ability: "Frisk",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Staraptor: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Giga Impact", "Roost", "Double-Edge", "Brave Bird"],
                ability: "Intimidate",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Staravia: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Roost", "Double-Edge", "Aerial Ace", "Air Slash"],
                ability: "Intimidate",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Starly: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Roost", "Quick Attack", "Aerial Ace", "Air Slash"],
                ability: "Keen Eye",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Steelix: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Stealth Rock", "High Horsepower", "Iron Tail", "Rock Slide"],
                ability: "Sturdy",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Stunky: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Night Slash", "Poison Jab", "Poison Gas", "Venoshock"],
                ability: "Aftermath",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Sudowoodo: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Defense", "Mimic", "Double-Edge", "Rock Slide"],
                ability: "Rock Head",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Swinub: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["High Horsepower", "Ancient Power", "Blizzard", "Icicle Crash"],
                ability: "Oblivious",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Sylveon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Mimic", "Play Rough", "Calm Mind"],
                ability: "Cute Charm",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Tangela: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double Hit", "Energy Ball", "Ancient Power", "Acid Spray"],
                ability: "Chlorophyll",
                item: "",
                nature: "Mild",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Tangrowth: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double Hit", "Energy Ball", "Ancient Power", "Sleep Powder"],
                ability: "Chlorophyll",
                item: "",
                nature: "Mild",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Teddiursa: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Play Rough", "High Horsepower", "Bulldoze", "Slash"],
                ability: "Quick Feet",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Tentacool: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Poison Jab", "Acid Armor", "Water Pulse", "Hex"],
                ability: "Clear Body",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Tentacruel: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Poison Jab", "Acid Armor", "Hydro Pump", "Hex"],
                ability: "Clear Body",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Thundurus: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Wildbolt Storm", "Extrasensory", "Crunch", "Thunder"],
                ability: "Prankster",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Tornadus: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Rock Smash", "Hyper Beam", "Hurricane", "Nasty Plot"],
                ability: "Prankster",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Togekiss: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Moonblast", "Baby-Doll Eyes", "Air Slash", "Extrasensory"],
                ability: "Serene Grace",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Togepi: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Baby-Doll Eyes", "Extrasensory", "Moonblast", "Calm Mind"],
                ability: "Serene Grace",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Togetic: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Moonblast", "Baby-Doll Eyes", "Air Slash", "Extrasensory"],
                ability: "Serene Grace",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Torterra: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Headlong Rush", "Leaf Blade", "Double-Edge", "Wood Hammer"],
                ability: "Overgrow",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Toxicroak: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Nasty Plot", "Poison Jab", "Earth Power", "Close Combat"],
                ability: "Anticipation",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Turtwig: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Sleep Powder", "Leafage", "Bite", "Bulldoze"],
                ability: "Overgrow",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Typhlosion-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Shadow Ball", "Overheat", "Flamethrower", "Infernal Parade"],
                ability: "Blaze",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 252,
                    spd: 0,
                    spe: 252
                }
            }
        }
    },
    Umbreon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Mimic", "Dark Pulse", "Calm Mind"],
                ability: "Synchronize",
                item: "",
                nature: "Calm",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Unown: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-!": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-?": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-A": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-B": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-C": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-D": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-E": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-F": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-G": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-H": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-I": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-J": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-K": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-L": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-M": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-N": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-O": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-P": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-Q": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-R": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-S": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-T": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-U": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-V": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-W": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-X": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-Y": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Unown-Z": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hidden Power", "", "", ""],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Ursaluna: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Play Rough", "High Horsepower", "Double-Edge", "Slash"],
                ability: "Bulletproof",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Ursaring: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Play Rough", "High Horsepower", "Double-Edge", "Slash"],
                ability: "Quick Feet",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Uxie: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hypnosis", "Tri Attack", "Calm Mind", "Mystical Power"],
                ability: "Levitate",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Vaporeon: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Double-Edge", "Mimic", "Aqua Tail", "Calm Mind"],
                ability: "Water Absorb",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Vespiquen: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Slash", "Air Slash", "Power Gem", "Bug Buzz"],
                ability: "Pressure",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Voltorb-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Thunderbolt", "Thunder", "Self-Destruct"],
                ability: "Soundproof",
                item: "",
                nature: "Hasty",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Vulpix: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Hex", "Extrasensory", "Flamethrower", "Flame Wheel"],
                ability: "Flash Fire",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Vulpix-Alola": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Ice Fang", "Dazzling Gleam", "Ice Beam", "Draining Kiss"],
                ability: "Snow Cloak",
                item: "",
                nature: "Timid",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Walrein: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Liquidation", "Ice Beam", "Blizzard", "Rest"],
                ability: "Thick Fat",
                item: "",
                nature: "Bold",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Weavile: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Poison Jab", "Swords Dance", "Night Slash", "Slash"],
                ability: "Pressure",
                item: "",
                nature: "Jolly",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Whiscash: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Zen Headbutt", "Aqua Tail", "Earth Power", "Rest"],
                ability: "Oblivious",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Wormadam: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Energy Ball", "Psychic", "Confusion", "Silver Wind"],
                ability: "Anticipation",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Wormadam-Sandy": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Earth Power", "Psychic", "Bug Buzz", "Silver Wind"],
                ability: "Anticipation",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Wormadam-Trash": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Iron Head", "Psychic", "Confusion", "Silver Wind"],
                ability: "Anticipation",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Wurmple: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Poison Sting", "Tackle", "", ""],
                ability: "Shield Dust",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Wyrdeer: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Psyshield Bash", "Confusion", "Hypnosis", "Calm Mind"],
                ability: "Frisk",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Yanma: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Ancient Power", "Silver Wind", "Hypnosis"],
                ability: "Speed Boost",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Yanmega: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Air Slash", "Ancient Power", "Crunch", "Bug Buzz"],
                ability: "Speed Boost",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Zoroark-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Extrasensory", "Shadow Claw", "Shadow Ball", "Nasty Plot"],
                ability: "Illusion",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    "Zorua-Hisui": {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Slash", "Snarl", "Swift", "Bitter Malice"],
                ability: "Illusion",
                item: "",
                nature: "Modest",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    },
    Zubat: {
        "Legal Moveset": {
            "Good Nature": {
                moves: ["Gust", "Hypnosis", "Bite", "Air Cutter"],
                ability: "Inner Focus",
                item: "",
                nature: "Adamant",
                ivs: {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                },
                evs: {
                    hp: 0,
                    atk: 0,
                    def: 0,
                    spa: 0,
                    spd: 0,
                    spe: 0
                }
            }
        }
    }
}
  , ke = Object.entries(Ss).reduce( (t, [e,a]) => f(c({}, t), {
    [e]: Object.entries(a).flatMap( ([p,i]) => Object.entries(i).map( ([o,d]) => c({
        category: p,
        name: o
    }, d)))
}), {})
  , Ps = t => t !== "" && !ls.includes(t)
  , Ms = [{
    id: "1",
    name: "Rowlet",
    types: ["Grass", "Flying"],
    moves: ["Gust", "Aerial Ace", "Magical Leaf", "Leaf Blade", "Roost", "Air Slash", "Leaf Storm", "Leafage"]
}, {
    id: "2",
    name: "Dartrix",
    types: ["Grass", "Flying"],
    moves: ["Gust", "Aerial Ace", "Magical Leaf", "Leaf Blade", "Roost", "Air Slash", "Leaf Storm", "Leafage"]
}, {
    id: "3",
    name: "Decidueye",
    types: ["Grass", "Fighting"],
    moves: ["Gust", "Rock Smash", "Aerial Ace", "Magical Leaf", "Leaf Blade", "Roost", "Aura Sphere", "Air Slash", "Brave Bird", "Leaf Storm", "Leafage", "Triple Arrows"]
}, {
    id: "4",
    name: "Cyndaquil",
    types: ["Fire"],
    moves: ["Ember", "Flamethrower", "Quick Attack", "Swift", "Flame Wheel", "Rollout", "Overheat"]
}, {
    id: "5",
    name: "Quilava",
    types: ["Fire"],
    moves: ["Ember", "Flamethrower", "Quick Attack", "Swift", "Flame Wheel", "Rollout", "Overheat"]
}, {
    id: "6",
    name: "Typhlosion",
    types: ["Fire", "Ghost"],
    moves: ["Ember", "Flamethrower", "Quick Attack", "Swift", "Flame Wheel", "Rollout", "Shadow Ball", "Overheat", "Hex", "Infernal Parade"]
}, {
    id: "7",
    name: "Oshawott",
    types: ["Water"],
    moves: ["Swords Dance", "Tackle", "Hydro Pump", "Slash", "Water Pulse", "Aqua Tail", "Aqua Jet"]
}, {
    id: "8",
    name: "Dewott",
    types: ["Water"],
    moves: ["Swords Dance", "Tackle", "Hydro Pump", "Slash", "Water Pulse", "Aqua Tail", "Aqua Jet"]
}, {
    id: "9",
    name: "Samurott",
    types: ["Water", "Dark"],
    moves: ["Swords Dance", "Tackle", "Hydro Pump", "Slash", "Water Pulse", "Dark Pulse", "Night Slash", "Aqua Tail", "Aqua Jet", "Ceaseless Edge"]
}, {
    id: "10",
    name: "Bidoof",
    types: ["Normal"],
    moves: ["Swords Dance", "Tackle", "Double-Edge", "Bite", "Rest", "Rollout", "Crunch"]
}, {
    id: "11",
    name: "Bibarel",
    types: ["Normal", "Water"],
    moves: ["Swords Dance", "Tackle", "Double-Edge", "Bite", "Rest", "Rollout", "Crunch", "Water Pulse", "Aqua Tail"]
}, {
    id: "12",
    name: "Starly",
    types: ["Normal", "Flying"],
    moves: ["Gust", "Double-Edge", "Quick Attack", "Aerial Ace", "Roost", "Air Slash", "Brave Bird", "Giga Impact"]
}, {
    id: "13",
    name: "Staravia",
    types: ["Normal", "Flying"],
    moves: ["Gust", "Double-Edge", "Quick Attack", "Aerial Ace", "Roost", "Air Slash", "Brave Bird", "Giga Impact"]
}, {
    id: "14",
    name: "Staraptor",
    types: ["Normal", "Flying"],
    moves: ["Gust", "Double-Edge", "Quick Attack", "Aerial Ace", "Roost", "Close Combat", "Air Slash", "Brave Bird", "Giga Impact"]
}, {
    id: "15",
    name: "Shinx",
    types: ["Electric"],
    moves: ["Bite", "Thunder Shock", "Thunder Wave", "Thunder", "Quick Attack", "Crunch", "Thunder Fang", "Wild Charge"]
}, {
    id: "16",
    name: "Luxio",
    types: ["Electric"],
    moves: ["Bite", "Thunder Shock", "Thunder Wave", "Thunder", "Quick Attack", "Crunch", "Thunder Fang", "Wild Charge"]
}, {
    id: "17",
    name: "Luxray",
    types: ["Electric"],
    moves: ["Bite", "Thunder Shock", "Thunder Wave", "Thunder", "Quick Attack", "Crunch", "Thunder Fang", "Wild Charge"]
}, {
    id: "18",
    name: "Wurmple",
    types: ["Bug"],
    moves: ["Tackle", "Poison Sting"]
}, {
    id: "19",
    name: "Silcoon",
    types: ["Bug"],
    moves: ["Tackle", "Poison Sting", "Iron Defense"]
}, {
    id: "20",
    name: "Beautifly",
    types: ["Bug", "Flying"],
    moves: ["Tackle", "Poison Sting", "Stun Spore", "Air Cutter", "Silver Wind", "Iron Defense", "Air Slash", "Bug Buzz", "Venoshock"]
}, {
    id: "21",
    name: "Cascoon",
    types: ["Bug"],
    moves: ["Tackle", "Poison Sting", "Iron Defense"]
}, {
    id: "22",
    name: "Dustox",
    types: ["Bug", "Poison"],
    moves: ["Tackle", "Poison Sting", "Poison Powder", "Confusion", "Silver Wind", "Extrasensory", "Iron Defense", "Bug Buzz", "Venoshock"]
}, {
    id: "23",
    name: "Ponyta",
    types: ["Fire"],
    moves: ["Tackle", "Double-Edge", "Ember", "Hypnosis", "Fire Blast", "Flame Wheel", "Flare Blitz", "Double Hit"]
}, {
    id: "24",
    name: "Rapidash",
    types: ["Fire"],
    moves: ["Tackle", "Double-Edge", "Ember", "Hypnosis", "Fire Blast", "Flame Wheel", "Flare Blitz", "Double Hit"]
}, {
    id: "25",
    name: "Eevee",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Quick Attack", "Mimic", "Swift", "Calm Mind", "Baby-Doll Eyes"]
}, {
    id: "26",
    name: "Vaporeon",
    types: ["Water"],
    moves: ["Tackle", "Double-Edge", "Quick Attack", "Mimic", "Swift", "Bubble", "Calm Mind", "Aqua Tail", "Baby-Doll Eyes"]
}, {
    id: "27",
    name: "Jolteon",
    types: ["Electric"],
    moves: ["Tackle", "Double-Edge", "Thunder Shock", "Thunderbolt", "Quick Attack", "Mimic", "Swift", "Calm Mind", "Baby-Doll Eyes"]
}, {
    id: "28",
    name: "Flareon",
    types: ["Fire"],
    moves: ["Tackle", "Double-Edge", "Ember", "Flamethrower", "Quick Attack", "Mimic", "Swift", "Calm Mind", "Baby-Doll Eyes"]
}, {
    id: "29",
    name: "Espeon",
    types: ["Psychic"],
    moves: ["Tackle", "Double-Edge", "Confusion", "Psychic", "Quick Attack", "Mimic", "Swift", "Calm Mind", "Baby-Doll Eyes"]
}, {
    id: "30",
    name: "Umbreon",
    types: ["Dark"],
    moves: ["Tackle", "Double-Edge", "Quick Attack", "Mimic", "Swift", "Calm Mind", "Dark Pulse", "Snarl", "Baby-Doll Eyes"]
}, {
    id: "31",
    name: "Leafeon",
    types: ["Grass"],
    moves: ["Tackle", "Double-Edge", "Quick Attack", "Mimic", "Swift", "Calm Mind", "Leaf Blade", "Baby-Doll Eyes", "Leafage"]
}, {
    id: "32",
    name: "Glaceon",
    types: ["Ice"],
    moves: ["Tackle", "Double-Edge", "Ice Beam", "Quick Attack", "Mimic", "Swift", "Powder Snow", "Calm Mind", "Baby-Doll Eyes"]
}, {
    id: "33",
    name: "Sylveon",
    types: ["Fairy"],
    moves: ["Tackle", "Double-Edge", "Quick Attack", "Mimic", "Swift", "Calm Mind", "Play Rough", "Fairy Wind", "Baby-Doll Eyes"]
}, {
    id: "34",
    name: "Zubat",
    types: ["Poison", "Flying"],
    moves: ["Gust", "Bite", "Hypnosis", "Leech Life", "Air Cutter", "Air Slash", "Cross Poison"]
}, {
    id: "35",
    name: "Golbat",
    types: ["Poison", "Flying"],
    moves: ["Gust", "Bite", "Hypnosis", "Leech Life", "Air Cutter", "Air Slash", "Cross Poison"]
}, {
    id: "36",
    name: "Crobat",
    types: ["Poison", "Flying"],
    moves: ["Gust", "Bite", "Hypnosis", "Leech Life", "Air Cutter", "Air Slash", "Cross Poison"]
}, {
    id: "37",
    name: "Drifloon",
    types: ["Ghost", "Flying"],
    moves: ["Confusion", "Hypnosis", "Self-Destruct", "Shadow Ball", "Astonish", "Extrasensory", "Calm Mind", "Hex", "Mystical Fire"]
}, {
    id: "38",
    name: "Drifblim",
    types: ["Ghost", "Flying"],
    moves: ["Confusion", "Hypnosis", "Self-Destruct", "Shadow Ball", "Astonish", "Extrasensory", "Calm Mind", "Hex", "Mystical Fire"]
}, {
    id: "39",
    name: "Kricketot",
    types: ["Bug"],
    moves: ["Tackle", "Absorb"]
}, {
    id: "40",
    name: "Kricketune",
    types: ["Bug"],
    moves: ["Swords Dance", "Tackle", "Absorb", "Slash", "Aerial Ace", "Night Slash", "X-Scissor", "Bug Buzz"]
}, {
    id: "41",
    name: "Buizel",
    types: ["Water"],
    moves: ["Hydro Pump", "Quick Attack", "Swift", "Water Pulse", "Aqua Tail", "Aqua Jet", "Double Hit"]
}, {
    id: "42",
    name: "Floatzel",
    types: ["Water"],
    moves: ["Hydro Pump", "Quick Attack", "Swift", "Crunch", "Water Pulse", "Aqua Tail", "Aqua Jet", "Double Hit"]
}, {
    id: "43",
    name: "Burmy",
    types: ["Bug"],
    moves: ["Struggle Bug"]
}, {
    id: "44",
    name: "Wormadam",
    types: ["Bug", "Grass"],
    moves: ["Gust", "Confusion", "Psychic", "Silver Wind", "Bug Buzz", "Energy Ball", "Earth Power", "Iron Head", "Struggle Bug"]
}, {
    id: "45",
    name: "Mothim",
    types: ["Bug", "Flying"],
    moves: ["Gust", "Confusion", "Psychic", "Silver Wind", "Air Slash", "Bug Buzz", "Struggle Bug"]
}, {
    id: "46",
    name: "Geodude",
    types: ["Rock", "Ground"],
    moves: ["Tackle", "Double-Edge", "Self-Destruct", "Rock Slide", "Mud-Slap", "Rollout", "Iron Defense", "Stealth Rock", "Bulldoze"]
}, {
    id: "47",
    name: "Graveler",
    types: ["Rock", "Ground"],
    moves: ["Tackle", "Double-Edge", "Self-Destruct", "Rock Slide", "Mud-Slap", "Rollout", "Iron Defense", "Stealth Rock", "Bulldoze"]
}, {
    id: "48",
    name: "Golem",
    types: ["Rock", "Ground"],
    moves: ["Tackle", "Double-Edge", "Self-Destruct", "Rock Slide", "Mud-Slap", "Rollout", "Iron Defense", "Stone Edge", "Stealth Rock", "Bulldoze"]
}, {
    id: "49",
    name: "Stantler",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Confusion", "Hypnosis", "Extrasensory", "Calm Mind", "Zen Headbutt", "Psyshield Bash"]
}, {
    id: "50",
    name: "Wyrdeer",
    types: ["Normal", "Psychic"],
    moves: ["Tackle", "Double-Edge", "Confusion", "Hypnosis", "Extrasensory", "Calm Mind", "Zen Headbutt", "Psyshield Bash"]
}, {
    id: "51",
    name: "Munchlax",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Bite", "Rest", "Rollout", "Giga Impact", "Zen Headbutt", "Bulldoze", "High Horsepower"]
}, {
    id: "52",
    name: "Snorlax",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Bite", "Rest", "Rollout", "Crunch", "Giga Impact", "Zen Headbutt", "Bulldoze", "High Horsepower"]
}, {
    id: "53",
    name: "Paras",
    types: ["Bug", "Grass"],
    moves: ["Absorb", "Poison Powder", "Stun Spore", "Spore", "Slash", "X-Scissor", "Energy Ball", "Venoshock"]
}, {
    id: "54",
    name: "Parasect",
    types: ["Bug", "Grass"],
    moves: ["Absorb", "Poison Powder", "Stun Spore", "Spore", "Slash", "X-Scissor", "Energy Ball", "Venoshock"]
}, {
    id: "55",
    name: "Pichu",
    types: ["Electric"],
    moves: ["Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Quick Attack", "Swift", "Spark", "Iron Tail"]
}, {
    id: "56",
    name: "Pikachu",
    types: ["Electric"],
    moves: ["Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Quick Attack", "Swift", "Spark", "Iron Tail"]
}, {
    id: "57",
    name: "Raichu",
    types: ["Electric"],
    moves: ["Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Quick Attack", "Swift", "Spark", "Iron Tail"]
}, {
    id: "58",
    name: "Abra",
    types: ["Psychic"],
    moves: ["Teleport"]
}, {
    id: "59",
    name: "Kadabra",
    types: ["Psychic"],
    moves: ["Confusion", "Psychic", "Hypnosis", "Teleport", "Recover", "Calm Mind", "Psycho Cut", "Zen Headbutt"]
}, {
    id: "60",
    name: "Alakazam",
    types: ["Psychic"],
    moves: ["Confusion", "Psychic", "Hypnosis", "Teleport", "Recover", "Calm Mind", "Psycho Cut", "Zen Headbutt"]
}, {
    id: "61",
    name: "Chimchar",
    types: ["Fire"],
    moves: ["Tackle", "Double-Edge", "Ember", "Flamethrower", "Swift", "Flame Wheel", "Nasty Plot"]
}, {
    id: "62",
    name: "Monferno",
    types: ["Fire", "Fighting"],
    moves: ["Tackle", "Double-Edge", "Ember", "Flamethrower", "Swift", "Flame Wheel", "Mach Punch", "Nasty Plot"]
}, {
    id: "63",
    name: "Infernape",
    types: ["Fire", "Fighting"],
    moves: ["Tackle", "Double-Edge", "Ember", "Flamethrower", "Swift", "Flame Wheel", "Mach Punch", "Close Combat", "Flare Blitz", "Nasty Plot", "Raging Fury"]
}, {
    id: "64",
    name: "Buneary",
    types: ["Normal"],
    moves: ["Double-Edge", "Quick Attack", "Swift", "Double Hit", "Draining Kiss", "Play Rough", "Baby-Doll Eyes"]
}, {
    id: "65",
    name: "Lopunny",
    types: ["Normal"],
    moves: ["Double-Edge", "Quick Attack", "Swift", "Mach Punch", "Close Combat", "Double Hit", "Draining Kiss", "Play Rough", "Baby-Doll Eyes"]
}, {
    id: "66",
    name: "Cherubi",
    types: ["Grass"],
    moves: ["Tackle", "Double-Edge", "Absorb", "Stun Spore", "Sleep Powder", "Petal Dance", "Energy Ball", "Draining Kiss"]
}, {
    id: "67",
    name: "Cherrim",
    types: ["Grass"],
    moves: ["Tackle", "Double-Edge", "Absorb", "Stun Spore", "Sleep Powder", "Petal Dance", "Energy Ball", "Draining Kiss"]
}, {
    id: "68",
    name: "Psyduck",
    types: ["Water"],
    moves: ["Hydro Pump", "Confusion", "Hypnosis", "Bubble", "Water Pulse", "Aqua Tail", "Zen Headbutt"]
}, {
    id: "69",
    name: "Golduck",
    types: ["Water"],
    moves: ["Hydro Pump", "Confusion", "Hypnosis", "Bubble", "Water Pulse", "Aqua Tail", "Zen Headbutt"]
}, {
    id: "70",
    name: "Combee",
    types: ["Bug", "Flying"],
    moves: ["Gust", "Struggle Bug"]
}, {
    id: "71",
    name: "Vespiquen",
    types: ["Bug", "Flying"],
    moves: ["Gust", "Pin Missile", "Recover", "Slash", "Silver Wind", "Air Slash", "Bug Buzz", "Power Gem", "Struggle Bug"]
}, {
    id: "72",
    name: "Scyther",
    types: ["Bug", "Flying"],
    moves: ["Swords Dance", "Quick Attack", "Silver Wind", "Aerial Ace", "Close Combat", "Air Slash", "X-Scissor", "Double Hit"]
}, {
    id: "73",
    name: "Scizor",
    types: ["Bug", "Steel"],
    moves: ["Swords Dance", "Quick Attack", "Silver Wind", "Aerial Ace", "Close Combat", "Air Slash", "X-Scissor", "Bullet Punch", "Iron Head", "Double Hit"]
}, {
    id: "74",
    name: "Kleavor",
    types: ["Bug", "Rock"],
    moves: ["Swords Dance", "Quick Attack", "Silver Wind", "Aerial Ace", "Close Combat", "Air Slash", "X-Scissor", "Stealth Rock", "Double Hit", "Stone Axe"]
}, {
    id: "75",
    name: "Heracross",
    types: ["Bug", "Fighting"],
    moves: ["Swords Dance", "Tackle", "Double-Edge", "Pin Missile", "Slash", "Megahorn", "Rock Smash", "Aerial Ace", "Close Combat"]
}, {
    id: "76",
    name: "Mime Jr.",
    types: ["Psychic", "Fairy"],
    moves: ["Confusion", "Psychic", "Hypnosis", "Mimic", "Iron Defense", "Calm Mind", "Zen Headbutt"]
}, {
    id: "77",
    name: "Mr. Mime",
    types: ["Psychic", "Fairy"],
    moves: ["Confusion", "Psychic", "Hypnosis", "Mimic", "Iron Defense", "Calm Mind", "Zen Headbutt", "Dazzling Gleam"]
}, {
    id: "78",
    name: "Aipom",
    types: ["Normal"],
    moves: ["Double-Edge", "Quick Attack", "Swift", "Iron Tail", "Nasty Plot", "Mud Bomb", "Double Hit"]
}, {
    id: "79",
    name: "Ambipom",
    types: ["Normal"],
    moves: ["Double-Edge", "Quick Attack", "Swift", "Iron Tail", "Nasty Plot", "Mud Bomb", "Double Hit"]
}, {
    id: "80",
    name: "Magikarp",
    types: ["Water"],
    moves: ["Splash"]
}, {
    id: "81",
    name: "Gyarados",
    types: ["Water", "Flying"],
    moves: ["Bite", "Hydro Pump", "Hyper Beam", "Focus Energy", "Splash", "Twister", "Crunch", "Water Pulse", "Aqua Tail", "Hurricane"]
}, {
    id: "82",
    name: "Shellos",
    types: ["Water"],
    moves: ["Tackle", "Hydro Pump", "Recover", "Mud-Slap", "Ancient Power", "Water Pulse", "Earth Power", "Mud Bomb"]
}, {
    id: "83",
    name: "Gastrodon",
    types: ["Water", "Ground"],
    moves: ["Tackle", "Hydro Pump", "Recover", "Mud-Slap", "Ancient Power", "Water Pulse", "Earth Power", "Mud Bomb"]
}, {
    id: "84",
    name: "Qwilfish",
    types: ["Dark", "Poison"],
    moves: ["Double-Edge", "Poison Sting", "Pin Missile", "Self-Destruct", "Spikes", "Water Pulse", "Poison Jab", "Dark Pulse", "Aqua Tail", "Barb Barrage"]
}, {
    id: "85",
    name: "Overqwil",
    types: ["Dark", "Poison"],
    moves: ["Double-Edge", "Poison Sting", "Pin Missile", "Self-Destruct", "Spikes", "Water Pulse", "Poison Jab", "Dark Pulse", "Aqua Tail", "Barb Barrage"]
}, {
    id: "86",
    name: "Happiny",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Soft-Boiled", "Calm Mind", "Draining Kiss", "Fairy Wind", "Baby-Doll Eyes"]
}, {
    id: "87",
    name: "Chansey",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Soft-Boiled", "Calm Mind", "Draining Kiss", "Fairy Wind", "Baby-Doll Eyes"]
}, {
    id: "88",
    name: "Blissey",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Soft-Boiled", "Calm Mind", "Draining Kiss", "Fairy Wind", "Baby-Doll Eyes"]
}, {
    id: "89",
    name: "Budew",
    types: ["Grass", "Poison"],
    moves: ["Poison Sting", "Absorb", "Poison Powder", "Stun Spore", "Petal Dance", "Poison Jab", "Energy Ball", "Venoshock"]
}, {
    id: "90",
    name: "Roselia",
    types: ["Grass", "Poison"],
    moves: ["Poison Sting", "Absorb", "Poison Powder", "Stun Spore", "Petal Dance", "Poison Jab", "Energy Ball", "Venoshock"]
}, {
    id: "91",
    name: "Roserade",
    types: ["Grass", "Poison"],
    moves: ["Poison Sting", "Absorb", "Poison Powder", "Stun Spore", "Petal Dance", "Poison Jab", "Energy Ball", "Venoshock"]
}, {
    id: "92",
    name: "Carnivine",
    types: ["Grass"],
    moves: ["Bite", "Absorb", "Stun Spore", "Sleep Powder", "Crunch", "Energy Ball", "Acid Spray"]
}, {
    id: "93",
    name: "Petilil",
    types: ["Grass"],
    moves: ["Absorb", "Poison Powder", "Stun Spore", "Sleep Powder", "Recover", "Energy Ball", "Leaf Storm", "Leafage"]
}, {
    id: "94",
    name: "Lilligant-Hisui",
    types: ["Grass", "Fighting"],
    moves: ["Absorb", "Poison Powder", "Stun Spore", "Sleep Powder", "Petal Dance", "Recover", "Rock Smash", "Leaf Blade", "Close Combat", "Drain Punch", "Energy Ball", "Leaf Storm", "Leafage", "Victory Dance"]
}, {
    id: "95",
    name: "Tangela",
    types: ["Grass"],
    moves: ["Absorb", "Poison Powder", "Stun Spore", "Sleep Powder", "Ancient Power", "Energy Ball", "Double Hit", "Acid Spray"]
}, {
    id: "96",
    name: "Tangrowth",
    types: ["Grass"],
    moves: ["Absorb", "Poison Powder", "Stun Spore", "Sleep Powder", "Sludge Bomb", "Ancient Power", "Energy Ball", "Double Hit", "Acid Spray"]
}, {
    id: "97",
    name: "Barboach",
    types: ["Water", "Ground"],
    moves: ["Rest", "Mud-Slap", "Water Pulse", "Aqua Tail", "Earth Power", "Mud Bomb", "Zen Headbutt"]
}, {
    id: "98",
    name: "Whiscash",
    types: ["Water", "Ground"],
    moves: ["Rest", "Mud-Slap", "Water Pulse", "Aqua Tail", "Earth Power", "Mud Bomb", "Zen Headbutt"]
}, {
    id: "99",
    name: "Croagunk",
    types: ["Poison", "Fighting"],
    moves: ["Poison Sting", "Rock Smash", "Close Combat", "Poison Jab", "Earth Power", "Nasty Plot", "Mud Bomb", "Venoshock"]
}, {
    id: "100",
    name: "Toxicroak",
    types: ["Poison", "Fighting"],
    moves: ["Poison Sting", "Rock Smash", "Close Combat", "Poison Jab", "Earth Power", "Nasty Plot", "Mud Bomb", "Venoshock"]
}, {
    id: "101",
    name: "Ralts",
    types: ["Psychic", "Fairy"],
    moves: ["Confusion", "Psychic", "Hypnosis", "Teleport", "Calm Mind", "Draining Kiss"]
}, {
    id: "102",
    name: "Kirlia",
    types: ["Psychic", "Fairy"],
    moves: ["Confusion", "Psychic", "Hypnosis", "Teleport", "Calm Mind", "Draining Kiss"]
}, {
    id: "103",
    name: "Gardevoir",
    types: ["Psychic", "Fairy"],
    moves: ["Confusion", "Psychic", "Hypnosis", "Teleport", "Recover", "Calm Mind", "Aura Sphere", "Draining Kiss", "Moonblast", "Dazzling Gleam"]
}, {
    id: "104",
    name: "Gallade",
    types: ["Psychic", "Fighting"],
    moves: ["Swords Dance", "Confusion", "Psychic", "Hypnosis", "Teleport", "Slash", "Calm Mind", "Leaf Blade", "Close Combat", "Psycho Cut", "Draining Kiss"]
}, {
    id: "105",
    name: "Yanma",
    types: ["Bug", "Flying"],
    moves: ["Gust", "Hypnosis", "Quick Attack", "Ancient Power", "Silver Wind", "Air Slash", "Bug Buzz"]
}, {
    id: "106",
    name: "Yanmega",
    types: ["Bug", "Flying"],
    moves: ["Gust", "Hypnosis", "Quick Attack", "Crunch", "Ancient Power", "Silver Wind", "Air Slash", "Bug Buzz"]
}, {
    id: "107",
    name: "Hippopotas",
    types: ["Ground"],
    moves: ["Tackle", "Double-Edge", "Bite", "Rest", "Crunch", "Mud Bomb", "High Horsepower"]
}, {
    id: "108",
    name: "Hippowdon",
    types: ["Ground"],
    moves: ["Tackle", "Double-Edge", "Bite", "Rest", "Crunch", "Mud Bomb", "High Horsepower"]
}, {
    id: "109",
    name: "Pachirisu",
    types: ["Electric"],
    moves: ["Bite", "Thunder Shock", "Thunder Wave", "Thunder", "Quick Attack", "Spark", "Crunch", "Baby-Doll Eyes"]
}, {
    id: "110",
    name: "Stunky",
    types: ["Poison", "Dark"],
    moves: ["Tackle", "Double-Edge", "Poison Gas", "Poison Jab", "Night Slash", "Venoshock", "Acid Spray"]
}, {
    id: "111",
    name: "Skuntank",
    types: ["Poison", "Dark"],
    moves: ["Tackle", "Double-Edge", "Flamethrower", "Poison Gas", "Poison Jab", "Night Slash", "Venoshock", "Acid Spray"]
}, {
    id: "112",
    name: "Teddiursa",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Slash", "Bulldoze", "Play Rough", "Baby-Doll Eyes", "High Horsepower"]
}, {
    id: "113",
    name: "Ursaring",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Slash", "Bulldoze", "Play Rough", "Baby-Doll Eyes", "High Horsepower"]
}, {
    id: "114",
    name: "Ursaluna",
    types: ["Normal", "Ground"],
    moves: ["Tackle", "Double-Edge", "Slash", "Bulldoze", "Play Rough", "Baby-Doll Eyes", "High Horsepower", "Headlong Rush"]
}, {
    id: "115",
    name: "Goomy",
    types: ["Dragon"],
    moves: ["Hydro Pump", "Bubble", "Acid Armor", "Water Pulse", "Dragon Pulse", "Acid Spray", "Shelter"]
}, {
    id: "116",
    name: "Sliggoo",
    types: ["Dragon", "Steel"],
    moves: ["Hydro Pump", "Bubble", "Acid Armor", "Water Pulse", "Dragon Pulse", "Iron Head", "Acid Spray", "Shelter"]
}, {
    id: "117",
    name: "Goodra",
    types: ["Dragon", "Steel"],
    moves: ["Hydro Pump", "Bubble", "Acid Armor", "Water Pulse", "Dragon Pulse", "Iron Head", "Acid Spray", "Shelter"]
}, {
    id: "118",
    name: "Onix",
    types: ["Rock", "Ground"],
    moves: ["Tackle", "Rock Slide", "Rollout", "Iron Tail", "Stealth Rock", "Bulldoze", "High Horsepower"]
}, {
    id: "119",
    name: "Steelix",
    types: ["Steel", "Ground"],
    moves: ["Tackle", "Rock Slide", "Rollout", "Iron Tail", "Stealth Rock", "Bulldoze", "High Horsepower"]
}, {
    id: "120",
    name: "Rhyhorn",
    types: ["Ground", "Rock"],
    moves: ["Tackle", "Double-Edge", "Rock Slide", "Rock Smash", "Giga Impact", "Stealth Rock", "Bulldoze", "High Horsepower"]
}, {
    id: "121",
    name: "Rhydon",
    types: ["Ground", "Rock"],
    moves: ["Tackle", "Double-Edge", "Rock Slide", "Rock Smash", "Giga Impact", "Stealth Rock", "Bulldoze", "High Horsepower"]
}, {
    id: "122",
    name: "Rhyperior",
    types: ["Ground", "Rock"],
    moves: ["Tackle", "Double-Edge", "Rock Slide", "Rock Smash", "Giga Impact", "Stealth Rock", "Bulldoze", "High Horsepower"]
}, {
    id: "123",
    name: "Bonsly",
    types: ["Rock"],
    moves: ["Tackle", "Double-Edge", "Mimic", "Rock Slide", "Rollout", "Iron Defense", "Stealth Rock", "Head Smash"]
}, {
    id: "124",
    name: "Sudowoodo",
    types: ["Rock"],
    moves: ["Tackle", "Double-Edge", "Mimic", "Rock Slide", "Rollout", "Iron Defense", "Stealth Rock", "Wood Hammer", "Head Smash"]
}, {
    id: "125",
    name: "Lickitung",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Rest", "Rollout", "Giga Impact", "Zen Headbutt", "Bulldoze"]
}, {
    id: "126",
    name: "Lickilicky",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Rest", "Rollout", "Giga Impact", "Zen Headbutt", "Bulldoze"]
}, {
    id: "127",
    name: "Togepi",
    types: ["Fairy"],
    moves: ["Tackle", "Extrasensory", "Calm Mind", "Draining Kiss", "Fairy Wind", "Moonblast", "Baby-Doll Eyes"]
}, {
    id: "128",
    name: "Togetic",
    types: ["Fairy", "Flying"],
    moves: ["Tackle", "Air Cutter", "Extrasensory", "Calm Mind", "Air Slash", "Draining Kiss", "Fairy Wind", "Moonblast", "Baby-Doll Eyes"]
}, {
    id: "129",
    name: "Togekiss",
    types: ["Fairy", "Flying"],
    moves: ["Tackle", "Air Cutter", "Extrasensory", "Calm Mind", "Air Slash", "Draining Kiss", "Fairy Wind", "Moonblast", "Baby-Doll Eyes"]
}, {
    id: "130",
    name: "Turtwig",
    types: ["Grass"],
    moves: ["Tackle", "Double-Edge", "Bite", "Sleep Powder", "Leaf Blade", "Bulldoze", "Leafage"]
}, {
    id: "131",
    name: "Grotle",
    types: ["Grass"],
    moves: ["Tackle", "Double-Edge", "Bite", "Sleep Powder", "Leaf Blade", "Bulldoze", "Leafage"]
}, {
    id: "132",
    name: "Torterra",
    types: ["Grass", "Ground"],
    moves: ["Tackle", "Double-Edge", "Bite", "Sleep Powder", "Leaf Blade", "Wood Hammer", "Bulldoze", "Leafage", "Headlong Rush"]
}, {
    id: "133",
    name: "Porygon",
    types: ["Normal"],
    moves: ["Tackle", "Hyper Beam", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Recover", "Tri Attack", "Spark"]
}, {
    id: "134",
    name: "Porygon2",
    types: ["Normal"],
    moves: ["Tackle", "Hyper Beam", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Recover", "Tri Attack", "Spark"]
}, {
    id: "135",
    name: "Porygon-Z",
    types: ["Normal"],
    moves: ["Tackle", "Hyper Beam", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Recover", "Tri Attack", "Spark"]
}, {
    id: "136",
    name: "Gastly",
    types: ["Ghost", "Poison"],
    moves: ["Hypnosis", "Poison Gas", "Shadow Ball", "Astonish", "Dark Pulse", "Venoshock", "Hex"]
}, {
    id: "137",
    name: "Haunter",
    types: ["Ghost", "Poison"],
    moves: ["Hypnosis", "Poison Gas", "Shadow Ball", "Astonish", "Dark Pulse", "Venoshock", "Hex"]
}, {
    id: "138",
    name: "Gengar",
    types: ["Ghost", "Poison"],
    moves: ["Hypnosis", "Poison Gas", "Shadow Ball", "Astonish", "Dark Pulse", "Venoshock", "Hex"]
}, {
    id: "139",
    name: "Spiritomb",
    types: ["Ghost", "Dark"],
    moves: ["Hypnosis", "Shadow Ball", "Extrasensory", "Dark Pulse", "Nasty Plot", "Shadow Sneak", "Hex"]
}, {
    id: "140",
    name: "Murkrow",
    types: ["Dark", "Flying"],
    moves: ["Gust", "Aerial Ace", "Roost", "Dark Pulse", "Night Slash", "Air Slash", "Nasty Plot", "Snarl"]
}, {
    id: "141",
    name: "Honchkrow",
    types: ["Dark", "Flying"],
    moves: ["Gust", "Aerial Ace", "Roost", "Dark Pulse", "Night Slash", "Air Slash", "Brave Bird", "Nasty Plot", "Snarl"]
}, {
    id: "142",
    name: "Unown",
    types: ["Psychic"],
    moves: ["Hidden Power"]
}, {
    id: "143",
    name: "Spheal",
    types: ["Ice", "Water"],
    moves: ["Ice Beam", "Blizzard", "Rest", "Powder Snow", "Rollout", "Water Pulse", "Liquidation"]
}, {
    id: "144",
    name: "Sealeo",
    types: ["Ice", "Water"],
    moves: ["Ice Beam", "Blizzard", "Rest", "Powder Snow", "Rollout", "Water Pulse", "Liquidation"]
}, {
    id: "145",
    name: "Walrein",
    types: ["Ice", "Water"],
    moves: ["Ice Beam", "Blizzard", "Rest", "Powder Snow", "Rollout", "Water Pulse", "Liquidation"]
}, {
    id: "146",
    name: "Remoraid",
    types: ["Water"],
    moves: ["Hydro Pump", "Ice Beam", "Hyper Beam", "Bubble", "Water Pulse", "Charge Beam", "Acid Spray"]
}, {
    id: "147",
    name: "Octillery",
    types: ["Water"],
    moves: ["Hydro Pump", "Ice Beam", "Hyper Beam", "Bubble", "Octazooka", "Water Pulse", "Charge Beam", "Acid Spray"]
}, {
    id: "148",
    name: "Skorupi",
    types: ["Poison", "Bug"],
    moves: ["Swords Dance", "Poison Sting", "Bite", "Crunch", "X-Scissor", "Cross Poison", "Venoshock"]
}, {
    id: "149",
    name: "Drapion",
    types: ["Poison", "Dark"],
    moves: ["Swords Dance", "Poison Sting", "Bite", "Crunch", "X-Scissor", "Cross Poison", "Venoshock"]
}, {
    id: "150",
    name: "Growlithe",
    types: ["Fire", "Rock"],
    moves: ["Tackle", "Double-Edge", "Bite", "Ember", "Rock Slide", "Crunch", "Flare Blitz", "Fire Fang"]
}, {
    id: "151",
    name: "Arcanine",
    types: ["Fire", "Rock"],
    moves: ["Tackle", "Double-Edge", "Bite", "Ember", "Rock Slide", "Crunch", "Flare Blitz", "Fire Fang", "Raging Fury"]
}, {
    id: "152",
    name: "Glameow",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Hypnosis", "Slash", "Night Slash", "Nasty Plot", "Play Rough"]
}, {
    id: "153",
    name: "Purugly",
    types: ["Normal"],
    moves: ["Tackle", "Double-Edge", "Hypnosis", "Slash", "Night Slash", "Nasty Plot", "Play Rough"]
}, {
    id: "154",
    name: "Machop",
    types: ["Fighting"],
    moves: ["Tackle", "Double-Edge", "Mach Punch", "Rock Smash", "Bulk Up", "Close Combat", "Bullet Punch", "Double Hit"]
}, {
    id: "155",
    name: "Machoke",
    types: ["Fighting"],
    moves: ["Tackle", "Double-Edge", "Mach Punch", "Rock Smash", "Bulk Up", "Close Combat", "Bullet Punch", "Double Hit"]
}, {
    id: "156",
    name: "Machamp",
    types: ["Fighting"],
    moves: ["Tackle", "Double-Edge", "Mach Punch", "Rock Smash", "Bulk Up", "Close Combat", "Drain Punch", "Bullet Punch", "Double Hit"]
}, {
    id: "157",
    name: "Chatot",
    types: ["Normal", "Flying"],
    moves: ["Gust", "Mimic", "Swift", "Air Cutter", "Roost", "Air Slash", "Nasty Plot", "Hurricane", "Play Rough"]
}, {
    id: "158",
    name: "Duskull",
    types: ["Ghost"],
    moves: ["Absorb", "Psychic", "Leech Life", "Shadow Ball", "Dark Pulse", "Shadow Sneak", "Hex"]
}, {
    id: "159",
    name: "Dusclops",
    types: ["Ghost"],
    moves: ["Absorb", "Psychic", "Leech Life", "Shadow Ball", "Dark Pulse", "Shadow Sneak", "Hex"]
}, {
    id: "160",
    name: "Dusknoir",
    types: ["Ghost"],
    moves: ["Absorb", "Psychic", "Leech Life", "Shadow Ball", "Dark Pulse", "Shadow Sneak", "Hex"]
}, {
    id: "161",
    name: "Piplup",
    types: ["Water"],
    moves: ["Tackle", "Double-Edge", "Bubble", "Aerial Ace", "Water Pulse", "Roost", "Liquidation"]
}, {
    id: "162",
    name: "Prinplup",
    types: ["Water"],
    moves: ["Tackle", "Double-Edge", "Bubble", "Aerial Ace", "Water Pulse", "Roost", "Liquidation"]
}, {
    id: "163",
    name: "Empoleon",
    types: ["Water", "Steel"],
    moves: ["Tackle", "Double-Edge", "Hydro Pump", "Bubble", "Aerial Ace", "Water Pulse", "Roost", "Flash Cannon", "Liquidation", "Wave Crash"]
}, {
    id: "164",
    name: "Mantyke",
    types: ["Water", "Flying"],
    moves: ["Tackle", "Double-Edge", "Hydro Pump", "Bubble", "Aerial Ace", "Water Pulse", "Roost", "Air Slash"]
}, {
    id: "165",
    name: "Mantine",
    types: ["Water", "Flying"],
    moves: ["Tackle", "Double-Edge", "Hydro Pump", "Bubble", "Aerial Ace", "Water Pulse", "Roost", "Air Slash"]
}, {
    id: "166",
    name: "Basculin",
    types: ["Water"],
    moves: ["Tackle", "Double-Edge", "Bite", "Crunch", "Zen Headbutt", "Aqua Jet", "Wave Crash"]
}, {
    id: "167",
    name: "Basculegion",
    types: ["Water", "Ghost"],
    moves: ["Tackle", "Double-Edge", "Bite", "Crunch", "Shadow Ball", "Zen Headbutt", "Aqua Jet", "Hex", "Wave Crash"]
}, {
    id: "168",
    name: "Vulpix",
    types: ["Fire"],
    moves: ["Ember", "Flamethrower", "Ice Beam", "Blizzard", "Quick Attack", "Quick Attack", "Fire Blast", "Flame Wheel", "Powder Snow", "Extrasensory", "Nasty Plot", "Nasty Plot", "Ice Fang", "Hex", "Draining Kiss", "Dazzling Gleam"]
}, {
    id: "169",
    name: "Ninetales",
    types: ["Fire"],
    moves: ["Ember", "Flamethrower", "Ice Beam", "Blizzard", "Quick Attack", "Quick Attack", "Fire Blast", "Flame Wheel", "Powder Snow", "Extrasensory", "Nasty Plot", "Nasty Plot", "Ice Fang", "Hex", "Draining Kiss", "Dazzling Gleam"]
}, {
    id: "170",
    name: "Tentacool",
    types: ["Water", "Poison"],
    moves: ["Poison Sting", "Hydro Pump", "Bubble", "Acid Armor", "Water Pulse", "Poison Jab", "Hex"]
}, {
    id: "171",
    name: "Tentacruel",
    types: ["Water", "Poison"],
    moves: ["Poison Sting", "Hydro Pump", "Bubble", "Acid Armor", "Water Pulse", "Poison Jab", "Hex"]
}, {
    id: "172",
    name: "Finneon",
    types: ["Water"],
    moves: ["Gust", "Hydro Pump", "Bubble", "Silver Wind", "Water Pulse", "Roost", "Air Slash"]
}, {
    id: "173",
    name: "Lumineon",
    types: ["Water"],
    moves: ["Gust", "Hydro Pump", "Bubble", "Silver Wind", "Water Pulse", "Roost", "Air Slash"]
}, {
    id: "174",
    name: "Magby",
    types: ["Fire"],
    moves: ["Fire Punch", "Tackle", "Ember", "Flamethrower", "Fire Blast", "Poison Gas", "Flame Wheel"]
}, {
    id: "175",
    name: "Magmar",
    types: ["Fire"],
    moves: ["Fire Punch", "Tackle", "Ember", "Flamethrower", "Fire Blast", "Poison Gas", "Flame Wheel"]
}, {
    id: "176",
    name: "Magmortar",
    types: ["Fire"],
    moves: ["Fire Punch", "Tackle", "Ember", "Flamethrower", "Fire Blast", "Poison Gas", "Flame Wheel"]
}, {
    id: "177",
    name: "Magnemite",
    types: ["Electric", "Steel"],
    moves: ["Tackle", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Spark", "Flash Cannon"]
}, {
    id: "178",
    name: "Magneton",
    types: ["Electric", "Steel"],
    moves: ["Tackle", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Tri Attack", "Spark", "Flash Cannon"]
}, {
    id: "179",
    name: "Magnezone",
    types: ["Electric", "Steel"],
    moves: ["Tackle", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Tri Attack", "Spark", "Flash Cannon"]
}, {
    id: "180",
    name: "Bronzor",
    types: ["Steel", "Psychic"],
    moves: ["Tackle", "Confusion", "Hypnosis", "Extrasensory", "Iron Defense", "Flash Cannon", "Hex"]
}, {
    id: "181",
    name: "Bronzong",
    types: ["Steel", "Psychic"],
    moves: ["Tackle", "Confusion", "Hypnosis", "Extrasensory", "Iron Defense", "Flash Cannon", "Hex"]
}, {
    id: "182",
    name: "Elekid",
    types: ["Electric"],
    moves: ["Thunder Punch", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Quick Attack", "Spark"]
}, {
    id: "183",
    name: "Electabuzz",
    types: ["Electric"],
    moves: ["Thunder Punch", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Quick Attack", "Spark"]
}, {
    id: "184",
    name: "Electivire",
    types: ["Electric"],
    moves: ["Thunder Punch", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Quick Attack", "Spark"]
}, {
    id: "185",
    name: "Gligar",
    types: ["Ground", "Flying"],
    moves: ["Poison Sting", "Quick Attack", "Slash", "Aerial Ace", "Poison Jab", "X-Scissor", "Mud Bomb"]
}, {
    id: "186",
    name: "Gliscor",
    types: ["Ground", "Flying"],
    moves: ["Swords Dance", "Poison Sting", "Pin Missile", "Quick Attack", "Slash", "Aerial Ace", "Poison Jab", "X-Scissor", "Earth Power", "Mud Bomb"]
}, {
    id: "187",
    name: "Gible",
    types: ["Dragon", "Ground"],
    moves: ["Tackle", "Double-Edge", "Slash", "Outrage", "Twister", "Dragon Claw", "Earth Power", "Bulldoze"]
}, {
    id: "188",
    name: "Gabite",
    types: ["Dragon", "Ground"],
    moves: ["Tackle", "Double-Edge", "Slash", "Outrage", "Twister", "Dragon Claw", "Earth Power", "Bulldoze"]
}, {
    id: "189",
    name: "Garchomp",
    types: ["Dragon", "Ground"],
    moves: ["Tackle", "Double-Edge", "Slash", "Outrage", "Twister", "Dragon Claw", "Earth Power", "Bulldoze"]
}, {
    id: "190",
    name: "Nosepass",
    types: ["Rock"],
    moves: ["Tackle", "Thunder Wave", "Rock Slide", "Spark", "Iron Defense", "Power Gem", "Earth Power"]
}, {
    id: "191",
    name: "Probopass",
    types: ["Rock", "Steel"],
    moves: ["Tackle", "Thunder Wave", "Rock Slide", "Tri Attack", "Spark", "Iron Defense", "Power Gem", "Earth Power", "Flash Cannon"]
}, {
    id: "192",
    name: "Voltorb",
    types: ["Electric", "Grass"],
    moves: ["Tackle", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Self-Destruct", "Spark", "Energy Ball"]
}, {
    id: "193",
    name: "Electrode",
    types: ["Electric", "Grass"],
    moves: ["Tackle", "Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Self-Destruct", "Spark", "Energy Ball", "Chloroblast"]
}, {
    id: "194",
    name: "Rotom",
    types: ["Electric", "Ghost"],
    moves: ["Thunder Shock", "Thunderbolt", "Thunder Wave", "Thunder", "Shadow Ball", "Charge Beam", "Hex"]
}, {
    id: "195",
    name: "Chingling",
    types: ["Psychic"],
    moves: ["Tackle", "Double-Edge", "Confusion", "Hypnosis", "Recover", "Extrasensory", "Ominous Wind"]
}, {
    id: "196",
    name: "Chimecho",
    types: ["Psychic"],
    moves: ["Tackle", "Double-Edge", "Confusion", "Hypnosis", "Recover", "Extrasensory", "Ominous Wind"]
}, {
    id: "197",
    name: "Misdreavus",
    types: ["Ghost"],
    moves: ["Confusion", "Hypnosis", "Shadow Ball", "Extrasensory", "Power Gem", "Shadow Sneak", "Hex"]
}, {
    id: "198",
    name: "Mismagius",
    types: ["Ghost"],
    moves: ["Confusion", "Hypnosis", "Shadow Ball", "Extrasensory", "Power Gem", "Shadow Sneak", "Hex"]
}, {
    id: "199",
    name: "Cleffa",
    types: ["Fairy"],
    moves: ["Tackle", "Double-Edge", "Psychic", "Calm Mind", "Draining Kiss", "Fairy Wind", "Moonblast", "Baby-Doll Eyes"]
}, {
    id: "200",
    name: "Clefairy",
    types: ["Fairy"],
    moves: ["Tackle", "Double-Edge", "Psychic", "Calm Mind", "Draining Kiss", "Fairy Wind", "Moonblast", "Baby-Doll Eyes"]
}, {
    id: "201",
    name: "Clefable",
    types: ["Fairy"],
    moves: ["Tackle", "Double-Edge", "Psychic", "Calm Mind", "Draining Kiss", "Fairy Wind", "Moonblast", "Baby-Doll Eyes"]
}, {
    id: "202",
    name: "Sneasel",
    types: ["Poison", "Fighting"],
    moves: ["Swords Dance", "Blizzard", "Quick Attack", "Swift", "Slash", "Rock Smash", "Close Combat", "Poison Jab", "Ice Shard"]
}, {
    id: "202-h",
    name: "Sneasel-Hisui",
    types: ["Poison", "Fighting"],
    moves: ["Swords Dance", "Blizzard", "Quick Attack", "Swift", "Slash", "Rock Smash", "Close Combat", "Poison Jab", "Ice Shard"]
}, {
    id: "203",
    name: "Sneasler",
    types: ["Poison", "Fighting"],
    moves: ["Swords Dance", "Quick Attack", "Swift", "Slash", "Rock Smash", "Close Combat", "Poison Jab", "Dire Claw"]
}, {
    id: "204",
    name: "Weavile",
    types: ["Dark", "Ice"],
    moves: ["Swords Dance", "Blizzard", "Quick Attack", "Swift", "Slash", "Poison Jab", "Night Slash", "Ice Shard"]
}, {
    id: "205",
    name: "Snorunt",
    types: ["Ice"],
    moves: ["Bite", "Blizzard", "Powder Snow", "Crunch", "Ice Shard", "Ice Fang", "Icicle Crash"]
}, {
    id: "206",
    name: "Glalie",
    types: ["Ice"],
    moves: ["Bite", "Blizzard", "Powder Snow", "Crunch", "Ice Ball", "Ice Shard", "Ice Fang", "Icicle Crash"]
}, {
    id: "207",
    name: "Froslass",
    types: ["Ice", "Ghost"],
    moves: ["Bite", "Blizzard", "Powder Snow", "Crunch", "Shadow Ball", "Ice Shard", "Ice Fang", "Hex", "Icicle Crash"]
}, {
    id: "208",
    name: "Cranidos",
    types: ["Rock"],
    moves: ["Tackle", "Double-Edge", "Bite", "Rock Slide", "Crunch", "Ancient Power", "Iron Head", "Head Smash"]
}, {
    id: "209",
    name: "Rampardos",
    types: ["Rock"],
    moves: ["Tackle", "Double-Edge", "Bite", "Rock Slide", "Crunch", "Ancient Power", "Iron Head", "Head Smash"]
}, {
    id: "210",
    name: "Shieldon",
    types: ["Rock", "Steel"],
    moves: ["Tackle", "Double-Edge", "Rock Slide", "Ancient Power", "Iron Defense", "Earth Power", "Iron Head", "Stealth Rock"]
}, {
    id: "211",
    name: "Bastiodon",
    types: ["Rock", "Steel"],
    moves: ["Tackle", "Double-Edge", "Rock Slide", "Ancient Power", "Iron Defense", "Earth Power", "Iron Head", "Stealth Rock"]
}, {
    id: "212",
    name: "Swinub",
    types: ["Ice", "Ground"],
    moves: ["Tackle", "Double-Edge", "Blizzard", "Ancient Power", "Ice Shard", "Bulldoze", "Icicle Crash", "High Horsepower"]
}, {
    id: "213",
    name: "Piloswine",
    types: ["Ice", "Ground"],
    moves: ["Tackle", "Double-Edge", "Blizzard", "Ancient Power", "Ice Shard", "Bulldoze", "Icicle Crash", "High Horsepower"]
}, {
    id: "214",
    name: "Mamoswine",
    types: ["Ice", "Ground"],
    moves: ["Tackle", "Double-Edge", "Blizzard", "Ancient Power", "Ice Shard", "Bulldoze", "Icicle Crash", "High Horsepower"]
}, {
    id: "215",
    name: "Bergmite",
    types: ["Ice"],
    moves: ["Tackle", "Double-Edge", "Bite", "Blizzard", "Powder Snow", "Crunch", "Iron Defense", "Ice Shard"]
}, {
    id: "216",
    name: "Avalugg",
    types: ["Ice", "Rock"],
    moves: ["Tackle", "Double-Edge", "Bite", "Blizzard", "Rock Slide", "Powder Snow", "Crunch", "Iron Defense", "Earth Power", "Ice Shard", "Mountain Gale"]
}, {
    id: "217",
    name: "Snover",
    types: ["Grass", "Ice"],
    moves: ["Blizzard", "Powder Snow", "Energy Ball", "Ice Shard", "Wood Hammer", "Icicle Crash", "Leafage"]
}, {
    id: "218",
    name: "Abomasnow",
    types: ["Grass", "Ice"],
    moves: ["Blizzard", "Powder Snow", "Energy Ball", "Ice Shard", "Wood Hammer", "Icicle Crash", "Leafage"]
}, {
    id: "219",
    name: "Zorua",
    types: ["Normal", "Ghost"],
    moves: ["Swift", "Slash", "Nasty Plot", "Shadow Claw", "Shadow Sneak", "Snarl", "Bitter Malice"]
}, {
    id: "220",
    name: "Zoroark",
    types: ["Normal", "Ghost"],
    moves: ["Swift", "Slash", "Shadow Ball", "Extrasensory", "Nasty Plot", "Shadow Claw", "Shadow Sneak", "Snarl", "Bitter Malice"]
}, {
    id: "221",
    name: "Rufflet",
    types: ["Normal", "Flying"],
    moves: ["Double-Edge", "Quick Attack", "Slash", "Twister", "Aerial Ace", "Roost", "Air Slash", "Brave Bird"]
}, {
    id: "222",
    name: "Braviary",
    types: ["Psychic", "Flying"],
    moves: ["Double-Edge", "Quick Attack", "Slash", "Twister", "Aerial Ace", "Roost", "Air Slash", "Brave Bird", "Hurricane", "Esper Wing"]
}, {
    id: "223",
    name: "Riolu",
    types: ["Fighting"],
    moves: ["Bite", "Crunch", "Rock Smash", "Iron Defense", "Bulk Up", "Close Combat", "Aura Sphere", "Bullet Punch"]
}, {
    id: "224",
    name: "Lucario",
    types: ["Fighting", "Steel"],
    moves: ["Bite", "Mach Punch", "Crunch", "Rock Smash", "Iron Defense", "Bulk Up", "Close Combat", "Aura Sphere", "Dragon Pulse", "Bullet Punch"]
}, {
    id: "225",
    name: "Uxie",
    types: ["Psychic"],
    moves: ["Confusion", "Hypnosis", "Swift", "Rest", "Tri Attack", "Extrasensory", "Calm Mind", "Double Hit", "Mystical Power"]
}, {
    id: "226",
    name: "Mesprit",
    types: ["Psychic"],
    moves: ["Confusion", "Recover", "Swift", "Rest", "Tri Attack", "Extrasensory", "Calm Mind", "Double Hit", "Mystical Power"]
}, {
    id: "227",
    name: "Azelf",
    types: ["Psychic"],
    moves: ["Confusion", "Self-Destruct", "Swift", "Rest", "Tri Attack", "Extrasensory", "Nasty Plot", "Double Hit", "Mystical Power"]
}, {
    id: "228",
    name: "Heatran",
    types: ["Fire", "Steel"],
    moves: ["Ember", "Crunch", "Ancient Power", "Iron Defense", "Earth Power", "Fire Fang", "Iron Head", "Magma Storm"]
}, {
    id: "229",
    name: "Regigigas",
    types: ["Normal"],
    moves: ["Tackle", "Ancient Power", "Rock Smash", "Giga Impact", "Zen Headbutt", "Iron Head", "Crush Grip", "Bulldoze"]
}, {
    id: "230",
    name: "Cresselia",
    types: ["Psychic"],
    moves: ["Tackle", "Confusion", "Psychic", "Recover", "Slash", "Psycho Cut", "Moonblast", "Lunar Blessing"]
}, {
    id: "231",
    name: "Thundurus",
    types: ["Electric", "Flying"],
    moves: ["Tackle", "Bite", "Thunder", "Spark", "Twister", "Crunch", "Extrasensory", "Nasty Plot", "Wildbolt Storm"]
}, {
    id: "232",
    name: "Tornadus",
    types: ["Flying"],
    moves: ["Tackle", "Bite", "Twister", "Crunch", "Air Cutter", "Extrasensory", "Nasty Plot", "Hurricane", "Bleakwind Storm"]
}, {
    id: "233",
    name: "Landorus",
    types: ["Ground", "Flying"],
    moves: ["Tackle", "Bite", "Twister", "Crunch", "Extrasensory", "Bulk Up", "Earth Power", "Bulldoze", "Sandsear Storm"]
}, {
    id: "234",
    name: "Enamorus",
    types: ["Fairy", "Flying"],
    moves: ["Tackle", "Bite", "Twister", "Crunch", "Extrasensory", "Iron Defense", "Draining Kiss", "Moonblast", "Springtide Storm"]
}, {
    id: "235",
    name: "Dialga",
    types: ["Steel", "Dragon"],
    moves: ["Slash", "Iron Tail", "Twister", "Ancient Power", "Dragon Claw", "Dragon Pulse", "Power Gem", "Earth Power", "Flash Cannon", "Roar of Time"]
}, {
    id: "236",
    name: "Palkia",
    types: ["Water", "Dragon"],
    moves: ["Hydro Pump", "Slash", "Twister", "Ancient Power", "Dragon Claw", "Aqua Tail", "Dragon Pulse", "Power Gem", "Earth Power", "Spacial Rend"]
}, {
    id: "237",
    name: "Giratina",
    types: ["Ghost", "Dragon"],
    moves: ["Ancient Power", "Shadow Ball", "Dragon Claw", "Aura Sphere", "Dragon Pulse", "Earth Power", "Shadow Claw", "Shadow Sneak", "Shadow Force", "Hex"]
}, {
    id: "237-o",
    name: "Giratina-Origin",
    types: ["Ghost", "Dragon"],
    moves: ["Ancient Power", "Shadow Ball", "Dragon Claw", "Aura Sphere", "Dragon Pulse", "Earth Power", "Shadow Claw", "Shadow Sneak", "Shadow Force", "Hex"]
}, {
    id: "238",
    name: "Arceus",
    types: ["Normal"],
    moves: ["Hyper Beam", "Confusion", "Quick Attack", "Recover", "Ancient Power", "Extrasensory", "Calm Mind", "Judgment"]
}, {
    id: "239",
    name: "Phione",
    types: ["Water"],
    moves: ["Hydro Pump", "Confusion", "Bubble", "Acid Armor", "Water Pulse", "Zen Headbutt", "Moonblast", "Take Heart"]
}, {
    id: "240",
    name: "Manaphy",
    types: ["Water"],
    moves: ["Hydro Pump", "Confusion", "Bubble", "Acid Armor", "Water Pulse", "Zen Headbutt", "Moonblast", "Take Heart"]
}, {
    id: "241",
    name: "Shaymin",
    types: ["Grass"],
    moves: ["Sleep Powder", "Quick Attack", "Recover", "Air Slash", "Energy Ball", "Earth Power", "Seed Flare", "Leafage"]
}, {
    id: "242",
    name: "Darkrai",
    types: ["Dark"],
    moves: ["Psychic", "Hypnosis", "Shadow Ball", "Dark Pulse", "Nasty Plot", "Shadow Sneak", "Dark Void", "Hex"]
}]
  , Bs = Ms.reduce( (t, e) => f(c({}, t), {
    [e.id]: e
}), {})
  , Q = {
    fontWeight: "normal",
    color: "gray"
}
  , Cs = {
    fontWeight: "bold",
    color: "green"
}
  , As = {
    fontWeight: "bold",
    color: "red"
}
  , Ds = ["Hardy", "Docile", "Bashful", "Quirky", "Serious"]
  , Gs = {
    atk: ["Lonely", "Adamant", "Naughty", "Brave"],
    def: ["Bold", "Impish", "Lax", "Relaxed"],
    spa: ["Modest", "Mild", "Rash", "Quiet"],
    spd: ["Calm", "Gentle", "Careful", "Sassy"],
    spe: ["Timid", "Hasty", "Jolly", "Naive"]
}
  , Ls = {
    atk: ["Bold", "Modest", "Calm", "Timid"],
    def: ["Lonely", "Mild", "Gentle", "Hasty"],
    spa: ["Adamant", "Impish", "Careful", "Jolly"],
    spd: ["Naughty", "Lax", "Rash", "Naive"],
    spe: ["Brave", "Relaxed", "Quiet", "Sassy"]
}
  , S = (t, e) => Ds.includes(e) || t === "hp" ? Q : Gs[t].includes(e) ? Cs : Ls[t].includes(e) ? As : Q
  , _s = k( () => {
    const t = P()
      , e = v()
      , a = x(e.breakpoints.down("md"));
    return n(j, {
        fullScreen: a,
        open: t.error !== "",
        onClose: () => t.setError(""),
        "aria-labelledby": "responsive-dialog-title",
        children: [s(X, {
            id: "responsive-dialog-title",
            children: "Incorrect preset"
        }), s(Y, {
            children: n(ee, {
                children: ["Oops! Seems like you tried to copy a Pok\xE9mon build containing incorrect moves and/or incorrect item (", s(r, {
                    color: "red",
                    sx: {
                        display: "inline"
                    },
                    children: "highlighted in red"
                }), ").", s("br", {}), s("br", {}), "Try to replace them by valid moves before copying the message!"]
            })
        }), n(se, {
            children: [s(T, {
                variant: "text",
                onClick: async () => {
                    try {
                        await navigator.clipboard.writeText(t.error === "twitch" ? t.formattedMessage : t.formattedMessageDiscord),
                        t.setCopied(!0)
                    } catch (p) {
                        console.error(p)
                    }
                    t.setError("")
                }
                ,
                children: "Copy anyway"
            }), s(T, {
                variant: "contained",
                onClick: () => t.setError(""),
                children: "Got it!"
            })]
        })]
    })
}
)
  , we = k( () => {
    var i;
    const t = v()
      , e = P()
      , a = ((i = Bs[e.selectedPokemonId]) == null ? void 0 : i.moves) || []
      , p = g.exports.useMemo( () => M[e.selectedPokemon], [e.selectedPokemon]);
    return n(N, {
        children: [n(m, {
            component: "form",
            sx: {
                display: "flex",
                p: 2,
                width: "100%",
                borderTop: `1px solid ${t.palette.background.paper}`,
                flexDirection: {
                    xs: "column",
                    sm: "row"
                }
            },
            noValidate: !0,
            autoComplete: "off",
            children: [n("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between"
                },
                children: [n("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: e.selectedUnown !== "" ? s(u, {
                            select: !0,
                            size: "small",
                            id: "name",
                            label: "Name",
                            value: e.selectedUnown,
                            onChange: o => e.setSelectedUnown(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            },
                            SelectProps: {
                                MenuProps: {
                                    PaperProps: {
                                        style: {
                                            maxHeight: 224
                                        }
                                    }
                                }
                            },
                            children: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "?"].map(o => s(H, {
                                value: `Unown-${o}`,
                                children: `Unown-${o}`
                            }, o))
                        }) : s(u, {
                            size: "small",
                            id: "name",
                            label: "Name",
                            value: e.selectedPokemon,
                            variant: "outlined",
                            disabled: !0,
                            InputProps: {
                                style: {
                                    maxWidth: 160,
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        })
                    }), s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: s(u, {
                            size: "small",
                            id: "nickname",
                            label: "Nickname",
                            value: e.nickname,
                            onChange: o => e.setNickname(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    maxWidth: 160,
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        })
                    }), s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: s(u, {
                            select: !0,
                            size: "small",
                            id: "nature",
                            label: "Nature",
                            value: e.nature,
                            onChange: o => e.setNature(o.target.value),
                            defaultValue: "Nature",
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    maxWidth: 160,
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            },
                            SelectProps: {
                                MenuProps: {
                                    PaperProps: {
                                        style: {
                                            maxHeight: 224
                                        }
                                    }
                                }
                            },
                            children: le.map(o => s(H, {
                                value: o,
                                children: o
                            }, o))
                        })
                    }), s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: s(u, {
                            size: "small",
                            id: "level",
                            label: "Level",
                            value: e.level,
                            onChange: o => e.setLevel(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    maxWidth: 160,
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        })
                    })]
                }), n("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [n(y, {
                        fullWidth: !0,
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: [s(w, {
                            id: "hp",
                            size: "small",
                            value: e.ivs.hp,
                            onChange: o => e.setHPIV(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("hp", e.nature),
                                    children: "HP (IV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        }), s(w, {
                            id: "hp",
                            size: "small",
                            value: e.evs.hp,
                            onChange: o => e.setHP(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("hp", e.nature),
                                    children: "HP (EV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                ml: 1,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        })]
                    }), n(y, {
                        fullWidth: !0,
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: [s(w, {
                            id: "atk",
                            size: "small",
                            value: e.ivs.atk,
                            onChange: o => e.setAtkIV(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("atk", e.nature),
                                    children: "Atk (IV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        }), s(w, {
                            id: "atk",
                            size: "small",
                            value: e.evs.atk,
                            onChange: o => e.setAtk(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("atk", e.nature),
                                    children: "Atk (EV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                ml: 1,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        })]
                    }), n(y, {
                        fullWidth: !0,
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: [s(w, {
                            id: "def",
                            size: "small",
                            value: e.ivs.def,
                            onChange: o => e.setDefIV(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("def", e.nature),
                                    children: "Def (IV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        }), s(w, {
                            id: "def",
                            size: "small",
                            value: e.evs.def,
                            onChange: o => e.setDef(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("def", e.nature),
                                    children: "Def (EV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                ml: 1,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        })]
                    }), n(y, {
                        fullWidth: !0,
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: [s(w, {
                            id: "spa",
                            size: "small",
                            value: e.ivs.spa,
                            onChange: o => e.setSpAIV(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("spa", e.nature),
                                    children: "SpA (IV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        }), s(w, {
                            id: "spa",
                            size: "small",
                            value: e.evs.spa,
                            onChange: o => e.setSpA(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("spa", e.nature),
                                    children: "SpA (EV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                ml: 1,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        })]
                    }), n(y, {
                        fullWidth: !0,
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: [s(w, {
                            id: "spd",
                            size: "small",
                            value: e.ivs.spd,
                            onChange: o => e.setSpDIV(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("spd", e.nature),
                                    children: "SpD (IV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        }), s(w, {
                            id: "spd",
                            size: "small",
                            value: e.evs.spd,
                            onChange: o => e.setSpD(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("spd", e.nature),
                                    children: "SpD (EV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                ml: 1,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        })]
                    }), n(y, {
                        fullWidth: !0,
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: [s(w, {
                            id: "spe",
                            size: "small",
                            value: e.ivs.spe,
                            onChange: o => e.setSpeIV(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("spe", e.nature),
                                    children: "Spe (IV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        }), s(w, {
                            id: "spe",
                            size: "small",
                            value: e.evs.spe,
                            onChange: o => e.setSpe(o.target.value),
                            endAdornment: s(b, {
                                position: "end",
                                children: s(r, {
                                    variant: "caption",
                                    sx: S("spe", e.nature),
                                    children: "Spe (EV)"
                                })
                            }),
                            defaultValue: "0",
                            sx: {
                                maxWidth: 120,
                                ml: 1,
                                backgroundColor: l(t.palette.background.paper, .7)
                            }
                        })]
                    })]
                })]
            }), n("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: -16
                },
                children: [n("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: e.advanced ? "space-between" : "flex-start",
                        marginTop: 16
                    },
                    children: [e.advanced && s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: s(u, {
                            size: "small",
                            id: "ot",
                            label: "OT",
                            value: e.ot.name,
                            onChange: o => e.setOTName(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        })
                    }), s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: s(u, {
                            select: !0,
                            size: "small",
                            id: "ball",
                            label: "Ball",
                            value: e.ot.ball,
                            onChange: o => e.setBall(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            },
                            SelectProps: {
                                MenuProps: {
                                    PaperProps: {
                                        style: {
                                            maxHeight: 224
                                        }
                                    }
                                }
                            },
                            children: de.map(o => s(H, {
                                value: o,
                                children: o
                            }, o))
                        })
                    }), e.advanced && s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: s(u, {
                            size: "small",
                            id: "tid",
                            label: "TID",
                            value: e.ot.tid,
                            onChange: o => e.setTID(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        })
                    }), e.advanced && s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: s(u, {
                            size: "small",
                            id: "sid",
                            label: "SID",
                            value: e.ot.sid,
                            onChange: o => e.setSID(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        })
                    }), s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: s(u, {
                            select: !0,
                            size: "small",
                            id: "language",
                            label: "Language",
                            value: e.ot.language,
                            onChange: o => e.setLanguage(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            },
                            SelectProps: {
                                MenuProps: {
                                    PaperProps: {
                                        style: {
                                            maxHeight: 224
                                        }
                                    }
                                }
                            },
                            children: rs.map(o => s(H, {
                                value: o,
                                children: o
                            }, o))
                        })
                    }), e.advanced && s(A, {
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0,
                            whiteSpace: "nowrap"
                        },
                        control: s(R, {
                            checked: e.ot.male,
                            onChange: o => e.setGender(o.target.checked)
                        }),
                        label: "Male trainer"
                    })]
                }), n("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 16
                    },
                    children: [s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: a.length === 0 ? s(u, {
                            size: "small",
                            id: "move1",
                            label: "Move 1",
                            value: e.moves.one,
                            onChange: o => e.setMove1(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        }) : s(I, {
                            freeSolo: !0,
                            id: "move1",
                            clearOnBlur: !0,
                            openOnFocus: !0,
                            selectOnFocus: !0,
                            value: e.moves.one,
                            onChange: (o, d) => e.setMove1(d || ""),
                            options: a,
                            renderInput: o => s(u, f(c({}, o), {
                                size: "small",
                                label: "Move 1",
                                InputProps: f(c({}, o.InputProps), {
                                    type: "search",
                                    style: {
                                        minWidth: 200,
                                        backgroundColor: l(t.palette.background.paper, .7)
                                    }
                                })
                            }))
                        })
                    }), s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: a.length === 0 ? s(u, {
                            size: "small",
                            id: "move2",
                            label: "Move 2",
                            value: e.moves.two,
                            onChange: o => e.setMove2(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        }) : s(I, {
                            freeSolo: !0,
                            id: "move2",
                            clearOnBlur: !0,
                            openOnFocus: !0,
                            selectOnFocus: !0,
                            value: e.moves.two,
                            onChange: (o, d) => e.setMove2(d || ""),
                            options: a,
                            renderInput: o => s(u, f(c({}, o), {
                                size: "small",
                                label: "Move 2",
                                InputProps: f(c({}, o.InputProps), {
                                    type: "search",
                                    style: {
                                        backgroundColor: l(t.palette.background.paper, .7)
                                    }
                                })
                            }))
                        })
                    }), s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: a.length === 0 ? s(u, {
                            size: "small",
                            id: "move3",
                            label: "Move 3",
                            value: e.moves.three,
                            onChange: o => e.setMove3(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        }) : s(I, {
                            freeSolo: !0,
                            id: "move3",
                            clearOnBlur: !0,
                            openOnFocus: !0,
                            selectOnFocus: !0,
                            value: e.moves.three,
                            onChange: (o, d) => e.setMove3(d || ""),
                            options: a,
                            renderInput: o => s(u, f(c({}, o), {
                                size: "small",
                                label: "Move 3",
                                InputProps: f(c({}, o.InputProps), {
                                    type: "search",
                                    style: {
                                        backgroundColor: l(t.palette.background.paper, .7)
                                    }
                                })
                            }))
                        })
                    }), s(y, {
                        fullWidth: !0,
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        children: a.length === 0 ? s(u, {
                            size: "small",
                            id: "move4",
                            label: "Move 4",
                            value: e.moves.four,
                            onChange: o => e.setMove4(o.target.value),
                            variant: "outlined",
                            InputProps: {
                                style: {
                                    backgroundColor: l(t.palette.background.paper, .7)
                                }
                            }
                        }) : s(I, {
                            freeSolo: !0,
                            id: "move4",
                            clearOnBlur: !0,
                            openOnFocus: !0,
                            selectOnFocus: !0,
                            value: e.moves.four,
                            onChange: (o, d) => e.setMove4(d || ""),
                            options: a,
                            renderInput: o => s(u, f(c({}, o), {
                                size: "small",
                                label: "Move 4",
                                InputProps: f(c({}, o.InputProps), {
                                    type: "search",
                                    style: {
                                        backgroundColor: l(t.palette.background.paper, .7)
                                    }
                                })
                            }))
                        })
                    }), s(A, {
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0,
                            mt: "auto"
                        },
                        disabled: V.includes(e.selectedPokemon),
                        control: s(R, {
                            checked: e.shiny,
                            onChange: o => e.setShiny(o.target.checked)
                        }),
                        label: "Shiny"
                    }), s(A, {
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0,
                            mt: "auto"
                        },
                        disabled: re.includes(e.selectedPokemon),
                        control: s(R, {
                            checked: e.alpha,
                            onChange: o => e.setAlpha(o.target.checked)
                        }),
                        label: "Alpha"
                    }), s(A, {
                        sx: {
                            p: 1,
                            pb: 1,
                            pt: 0
                        },
                        control: s(R, {
                            checked: e.malePokemon,
                            onChange: o => e.setMalePokemon(o.target.checked)
                        }),
                        label: "Male pok\xE9mon"
                    })]
                })]
            }), n(m, {
                sx: {
                    display: {
                        xs: "none",
                        sm: "flex"
                    },
                    justifyContent: "center",
                    m: "auto"
                },
                children: [s("img", {
                    src: p.sprites.front_default || "",
                    alt: e.selectedPokemon,
                    width: 140,
                    height: 140
                }), !V.includes(e.selectedPokemon) && s("img", {
                    src: p.sprites.front_shiny || "",
                    alt: e.selectedPokemon,
                    width: 140,
                    height: 140
                })]
            }), s(We, {
                open: e.copied,
                autoHideDuration: 6e3,
                onClose: () => e.setCopied(!1),
                children: s(Oe, {
                    variant: "filled",
                    onClose: () => e.setCopied(!1),
                    severity: "success",
                    sx: {
                        width: "100%"
                    },
                    children: "Your trade message has been successfully copied!"
                })
            })]
        }), s(m, {
            width: "100%",
            p: 2,
            pt: 0,
            mt: -2,
            children: s("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 16,
                    width: "100%"
                },
                children: s(T, {
                    fullWidth: !0,
                    variant: "contained",
                    sx: {
                        ml: 2
                    },
                    onClick: async () => {
                        if (Ps(e.item))
                            e.setError("discord");
                        else
                            try {
                                await navigator.clipboard.writeText(e.formattedMessageDiscord),
                                e.setCopied(!0)
                            } catch {
                                console.error("nope")
                            }
                    }
                    ,
                    children: "Copy Twitch/Discord Message!"
                })
            })
        }), s(_s, {})]
    })
}
)
  , Ts = k( ({strategy: t, selected: e}) => {
    const a = v();
    return s(O, {
        children: s(te, {
            children: n(oe, {
                sx: {
                    p: 1,
                    opacity: e ? 1 : .6,
                    color: e ? a.palette.primary.main : a.palette.text.primary
                },
                children: [n(r, {
                    variant: "body1",
                    sx: {
                        fontWeight: e ? "bold" : "normal"
                    },
                    children: [s("b", {
                        children: t.category.toUpperCase()
                    }), " - ", t.name]
                }), s(r, {
                    variant: "body2",
                    sx: {
                        fontWeight: e ? "bold" : "normal"
                    },
                    children: Object.entries(t.evs).map( ([p,i]) => `${i} ${U(p)}`).join(" / ")
                })]
            })
        })
    })
}
)
  , Hs = k( ({strategies: t}) => {
    const [e,a] = g.exports.useState(-1)
      , p = P()
      , i = (o, d) => {
        a(d)
    }
    ;
    return g.exports.useEffect( () => {
        a(-1)
    }
    , [p.selectedPokemon]),
    s(m, {
        sx: {
            width: "100%",
            display: "flex",
            flexDirection: "column"
        },
        children: s(Ve, {
            value: e,
            onChange: i,
            variant: "scrollable",
            scrollButtons: !0,
            allowScrollButtonsMobile: !0,
            "aria-label": "Select a strategy",
            children: t.map( (o, d) => {
                var B;
                return s(Ue, {
                    onClick: () => {
                        p.setSelectedStrategy(o),
                        _.event({
                            action: "select_strategy",
                            category: "Strategy",
                            label: `${p.selectedPokemon} - ${o.name}`
                        })
                    }
                    ,
                    label: s(Ts, {
                        strategy: o,
                        selected: ((B = p.selectedStrategy) == null ? void 0 : B.name) === o.name && p.selectedStrategy.category === o.category
                    })
                }, `${o.name}-${d}`)
            }
            )
        })
    })
}
)
  , xs = k( () => {
    const t = v()
      , e = P()
      , a = g.exports.useMemo( () => e.useDP ? ve[e.selectedPokemon] : ke[e.selectedPokemon], [e.selectedPokemon, e.useDP]);
    return s(m, {
        sx: {
            overflow: "auto",
            maxHeight: 550,
            p: 0,
            backgroundColor: l(t.palette.background.default, .6)
        },
        children: a ? n(m, {
            sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            children: [s(Hs, {
                strategies: a
            }), s(we, {})]
        }) : s(m, {
            sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            children: s(we, {})
        })
    })
}
)
  , Es = k( () => {
    const t = v()
      , e = P()
      , a = M[e.selectedPokemon]
      , p = {
        id: a.id,
        name: a.name,
        base_experience: a.base_experience,
        height: a.height,
        is_default: a.is_default,
        order: a.order,
        weight: a.weight,
        abilities: a.abilities,
        sprites: a.sprites,
        species: a.species,
        stats: a.stats,
        types: a.types
    };
    return s(Qe, {
        direction: "up",
        in: e.selectedPokemon !== "",
        children: n(m, {
            sx: {
                position: "fixed",
                bottom: 0,
                width: "100%",
                background: t.palette.primary.main
            },
            children: [n(K, {
                sx: {
                    background: t.palette.primary.main
                },
                children: [n(r, {
                    sx: {
                        color: t.palette.primary.contrastText,
                        mr: 1
                    },
                    variant: "h6",
                    children: [n("b", {
                        children: ["#", p.id]
                    }), " ", me(p.name)]
                }), p.types.map(i => s(ws, {
                    type: i
                }, i.type.name)), s(C, {
                    sx: {
                        ml: "auto",
                        color: t.palette.primary.contrastText
                    },
                    onClick: () => e.setSelectedPokemon("", -1),
                    children: s(qe, {})
                })]
            }), s(xs, {})]
        })
    })
}
)
  , Ns = k( () => {
    const t = P()
      , e = v()
      , a = x(e.breakpoints.down("md"));
    return n(j, {
        fullScreen: a,
        open: t.help,
        onClose: () => t.setHelp(!1),
        "aria-labelledby": "responsive-dialog-title",
        children: [s(X, {
            id: "responsive-dialog-title",
            children: "Need some help?"
        }), s(Y, {
            children: n(ee, {
                children: ["If you need any help or if you have any question, you can send me a message on discord at", " ", s(r, {
                    sx: {
                        display: "inline",
                        fontWeight: "bold",
                        "&:hover": {
                            cursor: "pointer",
                            color: e.palette.primary.main
                        }
                    },
                    onClick: async () => {
                        try {
                            await navigator.clipboard.writeText("Matthieu#2186"),
                            t.setCopied(!0),
                            window.setTimeout( () => t.setCopied(!1), 2e3)
                        } catch (p) {
                            console.error(p)
                        }
                    }
                    ,
                    children: "Matthieu#2186"
                }), ".", " ", t.copied ? s(r, {
                    color: "green",
                    sx: {
                        display: "inline",
                        fontStyle: "italic"
                    },
                    children: "(Copied!)"
                }) : ""]
            })
        }), s(se, {
            children: s(T, {
                variant: "contained",
                onClick: () => t.setHelp(!1),
                children: "Close"
            })
        })]
    })
}
)
  , Rs = k( ({pokemonId: t}) => {
    const e = v()
      , a = P()
      , p = g.exports.useMemo( () => M[t], [t])
      , i = g.exports.useMemo( () => ({
        id: p.id,
        name: p.name,
        base_experience: p.base_experience,
        height: p.height,
        is_default: p.is_default,
        order: p.order,
        weight: p.weight,
        abilities: p.abilities,
        sprites: p.sprites,
        species: p.species,
        stats: p.stats,
        types: p.types
    }), [p])
      , o = () => {
        a.selectedPokemon === t ? a.setSelectedPokemon("", -1) : (a.setSelectedPokemon(t, p.id),
        _.event({
            action: "select_pokemon",
            category: "Pok\xE9mon",
            label: t
        })),
        a.setSelectedStrategy(void 0)
    }
      , d = ["disable-me"];
    return s(O, {
        sx: {
            display: "flex",
            minWidth: 160,
            maxWidth: 160,
            mt: 2
        },
        children: n(te, {
            disabled: d.includes(t.toLowerCase()),
            sx: {
                p: 1,
                "&:hover": {
                    p: 1.25,
                    transition: "padding 0.15s"
                },
                border: a.selectedPokemon === t ? `4px solid ${e.palette.secondary.main}` : "none",
                opacity: d.includes(t.toLowerCase()) ? .3 : 1
            },
            onClick: o,
            children: [s(Je, {
                color: d.includes(t.toLowerCase()) ? "error" : "success",
                variant: "dot",
                sx: {
                    display: "flex",
                    zIndex: 0
                },
                invisible: a.useDP ? ve[t] === void 0 : ke[t] === void 0,
                children: s(Ke, {
                    component: "img",
                    image: `${i.sprites.front_default}`,
                    alt: i.name
                })
            }), s(oe, {
                sx: {
                    p: 0,
                    textAlign: "center"
                },
                children: n(r, {
                    variant: "h6",
                    component: "div",
                    children: [n("b", {
                        children: ["#", i.id]
                    }), " ", s(r, {
                        variant: "body1",
                        children: me(i.name)
                    })]
                })
            })]
        })
    })
}
)
  , Is = k( () => {
    const t = P()
      , e = v();
    t.setOnline(!0);
    const a = g.exports.useMemo( () => Object.keys(M).sort( (i, o) => {
        const d = M[i]
          , B = M[o];
        return d.id - B.id
    }
    ), [M])
      , p = g.exports.useMemo( () => ["Palkia", "Manaphy", "Phione", "Uxie", "Azelf", "Mesprit", "Heatran", "Regigigas", "Cresselia", "Giratina", "Giratina-Origin", "Tornadus", "Thundurus", "Landorus", "Enamorus", "Darkrai", "Shaymin", "Arceus"].sort( (i, o) => {
        const d = M[i]
          , B = M[o];
        return d.id - B.id
    }
    ), [M]);
    return g.exports.useEffect( () => {
        (async () => {
            (await $.post(fe, {
                type: "isPokemineRunning"
            })).data.body === "Yes" ? t.setOnline(!0) : t.setOnline(!1)
        }
        )(),
        _.send({
            hitType: "pageview",
            page: "/"
        })
    }
    , []),
    t.online === null ? s(ge, {}) : t.online ? n(N, {
        children: [s(ce, {}), n(m, {
            sx: {
                display: "flex",
                flexDirection: "column"
            },
            children: [n(m, {
                sx: {
                    display: "flex"
                },
                children: [s(A, {
                    sx: {
                        p: 4,
                        pb: 0
                    },
                    control: s($e, {
                        checked: t.onlyLegendaries,
                        onChange: () => t.setOnlyLegendaries(!t.onlyLegendaries)
                    }),
                    label: "Legends Only"
                }), s(A, {
                    sx: {
                        p: 4,
                        pb: 0,
                        ml: "auto"
                    },
                    control: s(N, {
                        children: s(Ze, {
                            direction: "row",
                            spacing: 1,
                            alignItems: "center",
                            children: s(y, {
                                fullWidth: !0,
                                sx: {
                                    p: 1,
                                    pb: 1,
                                    pt: 0
                                },
                                style: {
                                    minWidth: 120
                                },
                                children: s(u, {
                                    select: !0,
                                    size: "small",
                                    id: "site",
                                    label: "Select Game",
                                    value: t.game.text,
                                    defaultValue: t.game.text,
                                    onChange: i => {
                                        let o = he.filter(d => d.text == i.target.value)[0];
                                        console.log(o),
                                        t.setGame(o),
                                        open(o.url, "_self")
                                    }
                                    ,
                                    variant: "outlined",
                                    InputProps: {
                                        style: {
                                            backgroundColor: l(e.palette.background.paper, .7)
                                        }
                                    },
                                    SelectProps: {
                                        MenuProps: {
                                            PaperProps: {
                                                style: {
                                                    maxHeight: 224
                                                }
                                            }
                                        }
                                    },
                                    children: he.map(i => s(H, {
                                        value: i.text,
                                        children: i.text
                                    }, i.text))
                                })
                            })
                        })
                    }),
                    label: ""
                })]
            }), s(m, {
                sx: {
                    p: 2,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly"
                },
                children: (t.onlyLegendaries ? p : a).filter(i => i.toLocaleLowerCase().match(new RegExp(`.*${t.search.toLocaleLowerCase()}.*`))).map(i => s(Rs, {
                    pokemonId: i
                }, i))
            })]
        }), s(ie, {
            stream: !0
        }), t.selectedPokemon !== "" && s(Es, {}), s(Ns, {})]
    }) : s(pe, {})
}
)
  , Fs = () => (_.initialize([{
    trackingId: "G-R6RN85X5MT"
}, {
    trackingId: "G-K6XQ7FQJP8"
}]),
s(z.StrictMode, {
    children: s(Xe, {
        children: s(us, {
            children: n(os, {
                children: [s(Ye, {}), n(es, {
                    children: [s(ae, {
                        path: "/",
                        element: s(Is, {})
                    }), s(ae, {
                        path: "/guide",
                        element: s(vs, {})
                    })]
                })]
            })
        })
    })
}));
je.render(s(Fs, {}), document.getElementById("root"));
