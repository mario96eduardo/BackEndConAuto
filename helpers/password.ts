import bcryptjs from 'bcryptjs';

export const generatePassword = async (password: string) => {
    const salt = await bcryptjs.genSaltSync(3);
    const pass = bcryptjs.hashSync(password, salt);
    return pass;
}

export const ValidadPassword = (password: string, hash: string) => {
    const validPassword = bcryptjs.compareSync(password, hash);
    if (!validPassword) {
        return false;
    } else {
        return true;
    }

}
