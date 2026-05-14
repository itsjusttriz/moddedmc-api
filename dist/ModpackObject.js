"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurseforgeModpack = void 0;
const ModpackDeveloperObject_1 = require("./ModpackDeveloperObject");
const SecureObject_1 = require("./utils/SecureObject");
class CurseforgeModpack extends SecureObject_1.SecureObject {
    get id() {
        return this.raw.id;
    }
    get name() {
        return this.raw.name;
    }
    get dev() {
        const authors = this.raw.authors;
        const [first] = authors.map((dev) => new ModpackDeveloperObject_1.CurseForgeModpackDev(dev));
        return first;
    }
    get launcher() {
        return 'Curseforge';
    }
    get link() {
        const links = this.raw.links;
        return links.websiteUrl;
    }
}
exports.CurseforgeModpack = CurseforgeModpack;
