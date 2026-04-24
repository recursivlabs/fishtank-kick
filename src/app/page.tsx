import { pitchStyles } from './pitch-styles';
import { pitchBody } from './pitch-body';

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pitchStyles }} />
      <div dangerouslySetInnerHTML={{ __html: pitchBody }} />
    </>
  );
}
