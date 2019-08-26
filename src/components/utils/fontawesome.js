import { library, dom } from '@fortawesome/fontawesome-svg-core';
import * as fas from '@fortawesome/free-solid-svg-icons';

export default function () 
{
    library.add(fas.faCheck);
    library.add(fas.faCircle);
    dom.watch();

    return;
}