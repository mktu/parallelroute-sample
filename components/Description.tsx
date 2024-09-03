import { FC } from "react";

const Description: FC = () => {
    return (
        <section className='p-4'>
            <h3 className='font-semibold text-lg'>Parallel route checker</h3>
            <p className='text-sm mt-2'>
                Routesからルートを選択すると、選択されたルートに対応したコンポーネントがRenderedセクションにレンダリングされます。
                <br />また、その時レンダリングされたファイルパスがFilesセクションにハイライトされます。
            </p>
        </section>
    );
}

export default Description