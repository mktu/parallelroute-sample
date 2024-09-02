import { FC } from "react";

const Description: FC = () => {
    return (
        <section className='p-4'>
            <h3 className='font-semibold text-lg'>Parallel route checker</h3>
            <p className='text-sm mt-2'>
                Linksからルートを選択すると、選択されたルートに対応したコンポーネントがComponentsセクションにレンダリングされます。
                <br />また、その時レンダリングされたファイルパスがListセクションにハイライトされます。
            </p>
        </section>
    );
}

export default Description