export interface Character {
	getSkill(): String;
}

export class HumanCharacter implements Character {
	getSkill() {
		return 'Intelligence';
	}
}

export class OrcCharacter implements Character {
	getSkill() {
		return 'Strength';
	}
}

export class ElfCharacter implements Character {
	getSkill() {
		return 'Dexterity';
	}
}

export interface RPGClass {
    getWeapon(): String;
} 

export class Mage implements RPGClass {
	getWeapon() {
		return 'Staff';
	}
}

export class Warrior implements RPGClass {
	getWeapon() {
		return 'Sword';
	}
}

export class Rogue implements RPGClass {
	getWeapon() {
		return 'Bow';
	}
}

export interface CharacterFactory {
    makeCharacter(): Character;
    makeRPGClass(): RPGClass;
}

export class HumanFactory implements CharacterFactory {
	makeCharacter() {
        return new HumanCharacter();
    }

    makeRPGClass() {
        return new Mage();
    }
}

export class OrcFactory implements CharacterFactory {
	makeCharacter() {
        return new OrcCharacter();
    }

    makeRPGClass() {
        return new Warrior();
    }
}

export class ElfFactory implements CharacterFactory {
	makeCharacter() {
        return new ElfCharacter();
    }

    makeRPGClass() {
        return new Rogue();
    }
}
