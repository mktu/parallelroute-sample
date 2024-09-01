import { FC } from "react";

const Description: FC = () => {
    return (
        <section className='p-4'>
            <h3 className='font-semibold text-lg'>Parallel route checker</h3>
            <p className='text-sm mt-2'>
                "Links"からルートを選択すると、選択されたルートに対応したコンポーネントが"Components"セクションにレンダリングされます。
                <br />また、その時レンダリングされたファイルパスが"List"セクションにハイライトされます。
            </p>
        </section>
    );
}

export default Description