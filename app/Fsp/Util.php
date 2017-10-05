<?php

namespace App\Fsp;

use Log;

class Util
{
    /**
     * Get the number of folders and files from a given path.
     *
     * @param string $directory The initial path
     *
     * @return number
     */
    public static function getFolderAndFileCountFromPath(string $directory)
    {
        Log::info('Directory: '.$directory);
        Log::info('getcwd(): '.getcwd());

        if (!is_dir($directory)) {
            Log::info('Not a Directory');

            return false;
        }

        $totalCount = 0;

        $dirContents = scandir($directory);
        foreach ($dirContents as $row) {
            if ($row == '.' || $row == '..') {
                continue;
            }
            if (is_dir($directory.'/'.$row)) {
                $totalCount += self::getFolderAndFileCountFromPath($directory.'/'.$row);
                $totalCount++;
            } else {
                $totalCount++;
            }
        }

        return $totalCount;
    }
}
