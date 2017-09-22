<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Fsp\Util;

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
