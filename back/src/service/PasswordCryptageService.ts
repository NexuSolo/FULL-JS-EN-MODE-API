import bcrypt from 'bcrypt';

export class PasswordCryptageService {

    async cryptPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }

    async comparePasswords(providedPassword: string, storedPasswordHash: string): Promise<boolean> {
        const match = await bcrypt.compare(providedPassword, storedPasswordHash);
        return match;
    }

}