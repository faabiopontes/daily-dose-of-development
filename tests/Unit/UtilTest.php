<?php

namespace Tests\Unit;

use App\Fsp\Util;
use Tests\TestCase;

class UtilTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetFolderAndFileCountFromPath()
    {
        $fileFolderCount = Util::getFolderAndFileCountFromPath('public/data');
        $this->assertEquals(8, $fileFolderCount);
    }
}
